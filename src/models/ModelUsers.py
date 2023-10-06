from .entities.User import User, AgregarInfoLOTE, Agregar_infoPP, Agregar_infoBLOQUE, Agregar_infoTROZA, info_validado_pp, info_validado_bloque, info_validado_troza
from werkzeug.security import  generate_password_hash

class ModelUser():

    @classmethod
    def login(cls, db, user):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT id, username, password, fullname, rol FROM user WHERE username = %s"
            cursor.execute(sql, (user.username,))
            row = cursor.fetchone()
            if row:
                user = User(row[0], row[1], User.check_password(row[2], user.password), row[3], row[4])
                return user
            else:
                return None
        except Exception as ex:
            raise Exception(ex)
        
    @staticmethod
    def delete_estado(user_id, db):
        try:
            cursor = db.connection.cursor()
            sql = """DELETE FROM user WHERE id = '{}'""".format(user_id)
            cursor.execute(sql)
            db.connection.commit()
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)


        
    @classmethod
    def update_user(cls, db, user):
        try:
            cursor = db.connection.cursor()
            sql = """UPDATE user SET sesion = 1 WHERE id = '{}'""".format(user.id)
            cursor.execute(sql)
            db.connection.commit()
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        
    @classmethod
    def update_user_logout(cls, db, user):
        try:
            cursor = db.connection.cursor()
            sql = """UPDATE user SET sesion = 0 WHERE id = '{}'""".format(user.id)
            cursor.execute(sql)
            db.connection.commit()
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
            

    @classmethod
    def get_by_id(cls, db, id):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT id, username, fullname, rol FROM user WHERE id = {}".format(id)
            cursor.execute(sql)
            row = cursor.fetchone()
            if row != None:
                return User(row[0], row[1], None, row[2], row[3])
            else:
                return None
        except Exception as ex:
            raise Exception(ex)
        
        
    @classmethod
    def get_users(cls, db):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT id, username, fullname, rol FROM user"
            cursor.execute(sql)
            rows = cursor.fetchall()
            users = []
            for row in rows:
                user = User(row[0], row[1], None, row[2], row[3])
                users.append(user)
            return users
        except Exception as ex:
            raise Exception(ex)
        
    @classmethod
    def agregar_user(cls, db, user):
        try:
            cursor = db.connection.cursor()
            sql = "INSERT INTO user (username, password, fullname, rol) VALUES (%s, %s, %s, %s)"
            cursor.execute(sql, (user.username, generate_password_hash(user.password), user.fullname, user.rol))
            db.connection.commit()
            return True
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        
    @classmethod
    def user_exists(cls, db, username):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT COUNT(*) FROM user WHERE username = %s"
            cursor.execute(sql, (username,))
            row = cursor.fetchone()
            return row[0] > 0
        except Exception as ex:
            raise Exception(ex)
        
    @staticmethod
    def actualizar_user(db, id, username, password, fullname, rol):
        try:
            cursor = db.connection.cursor()
            sql = "UPDATE user SET username = %s, password = %s, fullname = %s, rol = %s WHERE id = %s"
            cursor.execute(sql, (username, generate_password_hash(password), fullname, rol, id))
            db.connection.commit()
            return True
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        
        
class ModelInfo():

    @classmethod
    def get_last_lote(cls, db):
        try:
            cursor = db.connection.cursor()
            cursor.execute("SELECT MAX(lote) FROM agregar_info")
            return cursor.fetchone()[0]
        except Exception as e:
            print(e)
            return None
        finally:
            if db.connection.ping():

                cursor.close()


    @classmethod
    def get_next_lote(cls, last_lote):
        try:
            if last_lote is None or last_lote == "":
                # If no lot numbers in database, start with A001
                return "A001"
            elif last_lote.startswith("A") and int(last_lote[1:]) < 999:
                # If last lot number is in range A001 to A999, increment the number part
                num = int(last_lote[1:]) + 1
                return f"A{num:03}"
            elif last_lote.startswith("Z999"):
                raise ValueError("Se han alcanzado los límites del número de lote.")
            else:
                # If last lot number is in range B001 to Z999, change first letter to next letter in alphabet and set number part to "001"
                letra = chr(ord(last_lote[0]) + 1)
                return f"{letra}001"
        except Exception as e:
            print(e)
            return None



    @classmethod
    def agregar_infoPP(cls, db, info):
        try:
            cursor = db.connection.cursor()
            sql = "INSERT INTO agregar_infopp (lotePP, fecha_ingresoPP, proveedorPP, receptorPP, remision_provPP, talo_salvoconductoPP, remi_salvoconductoPP, nombre_razonPP, entidadPP, no_registroPP, departamentoPP, municipioPP, veredaPP, transportadorPP, placaPP, comunPP, cientificoPP, presentacionPP, idPP, calibrePP, anchoPP, largoPP, cantidadPP, m3PP, pulgPP, cantidadtotalPP) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (info.lotePP, info.fecha_ingresoPP, info.proveedorPP, info.receptorPP, info.remision_provPP, info.talo_salvoconductoPP, info.remi_salvoconductoPP, info.nombre_razonPP, info.entidadPP, info.no_registroPP, info.departamentoPP, info.municipioPP, info.veredaPP, info.transportadorPP, info.placaPP, info.comunPP, info.cientificoPP, info.presentacionPP, info.idPP, info.calibrePP, info.anchoPP, info.largoPP, info.cantidadPP, info.m3PP, info.pulgPP, info.cantidadtotalPP))
            db.connection.commit()
            return True
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        
    @classmethod
    def agregar_infoBLOQUE(cls, db, info):
        try:
            cursor = db.connection.cursor()
            sql = "INSERT INTO agregar_infobloque (loteBLOQUE, fecha_ingresoBLOQUE, proveedorBLOQUE, receptorBLOQUE, remision_provBLOQUE, talo_salvoconductoBLOQUE, remi_salvoconductoBLOQUE, nombre_razonBLOQUE, entidadBLOQUE, no_registroBLOQUE, departamentoBLOQUE, municipioBLOQUE, veredaBLOQUE, transportadorBLOQUE, placaBLOQUE, comunBLOQUE, cientificoBLOQUE, presentacionBLOQUE, medidaBLOQUE, cantpulgBLOQUE, pulgadasBLOQUE) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (info.loteBLOQUE, info.fecha_ingresoBLOQUE, info.proveedorBLOQUE, info.receptorBLOQUE, info.remision_provBLOQUE, info.talo_salvoconductoBLOQUE, info.remi_salvoconductoBLOQUE, info.nombre_razonBLOQUE, info.entidadBLOQUE, info.no_registroBLOQUE, info.departamentoBLOQUE, info.municipioBLOQUE, info.veredaBLOQUE, info.transportadorBLOQUE, info.placaBLOQUE, info.comunBLOQUE, info.cientificoBLOQUE, info.presentacionBLOQUE, info.medidaBLOQUE, info.cantpulgBLOQUE, info.pulgadasBLOQUE))
            db.connection.commit()
            return True
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        
    @classmethod
    def agregar_infoTROZA(cls, db, info):
        try:
            cursor = db.connection.cursor()
            sql = "INSERT INTO agregar_infotroza (loteTROZA, fecha_ingresoTROZA, proveedorTROZA, receptorTROZA, remision_provTROZA, talo_salvoconductoTROZA, remi_salvoconductoTROZA, nombre_razonTROZA, entidadTROZA, no_registroTROZA, departamentoTROZA, municipioTROZA, veredaTROZA, transportadorTROZA, placaTROZA, comunTROZA, cientificoTROZA, presentacionTROZA, diametroTROZA, largoTROZA, volm3TROZA, M3ProvTROZA, CantidadProvTROZA) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (info.loteTROZA, info.fecha_ingresoTROZA, info.proveedorTROZA, info.receptorTROZA, info.remision_provTROZA, info.talo_salvoconductoTROZA, info.remi_salvoconductoTROZA, info.nombre_razonTROZA, info.entidadTROZA, info.no_registroTROZA, info.departamentoTROZA, info.municipioTROZA, info.veredaTROZA, info.transportadorTROZA, info.placaTROZA, info.comunTROZA, info.cientificoTROZA, info.presentacionTROZA, info.diametroTROZA, info.largoTROZA, info.volm3TROZA, info.M3ProvTROZA, info.CantidadProvTROZA))
            db.connection.commit()
            return True
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        

    @classmethod
    def get_last_infoLOTE(cls, db):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT lote FROM agregar_info ORDER BY lote DESC LIMIT 1"
            cursor.execute(sql)
            row = cursor.fetchone()
            if row:
                user = AgregarInfoLOTE(row[0])
                return user
            else:
                return None
        except Exception as ex:
            raise Exception(ex)

        
    @classmethod
    def get_infoPP(cls, db):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT lotePP, fecha_ingresoPP, proveedorPP, receptorPP, remision_provPP, talo_salvoconductoPP, remi_salvoconductoPP, nombre_razonPP, entidadPP, no_registroPP, departamentoPP, municipioPP, veredaPP, transportadorPP, placaPP, comunPP, cientificoPP, presentacionPP, idPP, calibrePP, anchoPP, largoPP, cantidadPP, m3PP, pulgPP, cantidadtotalPP  FROM agregar_infopp"
            cursor.execute(sql)
            rows = cursor.fetchall()
            users = []
            for row in rows:
                user = Agregar_infoPP(
                # Asigna los valores a los atributos de info según corresponda
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                row[6],
                row[7],
                row[8],
                row[9],
                row[10],
                row[11],
                row[12],
                row[13],
                row[14],
                row[15],
                row[16],
                row[17],
                row[18],
                row[19],
                row[20],
                row[21],
                row[22],
                row[23],
                row[24],
                row[25])
                users.append(user)
            return users
        except Exception as ex:
            raise Exception(ex)
        

    @classmethod
    def get_infoBLOQUE(cls, db):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT loteBLOQUE, fecha_ingresoBLOQUE, proveedorBLOQUE, receptorBLOQUE, remision_provBLOQUE, talo_salvoconductoBLOQUE, remi_salvoconductoBLOQUE, nombre_razonBLOQUE, entidadBLOQUE, no_registroBLOQUE, departamentoBLOQUE, municipioBLOQUE, veredaBLOQUE, transportadorBLOQUE, placaBLOQUE, comunBLOQUE, cientificoBLOQUE, presentacionBLOQUE, medidaBLOQUE, cantpulgBLOQUE, pulgadasBLOQUE   FROM agregar_infobloque"
            cursor.execute(sql)
            rows = cursor.fetchall()
            users = []
            for row in rows:
                user = Agregar_infoBLOQUE(
                # Asigna los valores a los atributos de info según corresponda
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                row[6],
                row[7],
                row[8],
                row[9],
                row[10],
                row[11],
                row[12],
                row[13],
                row[14],
                row[15],
                row[16],
                row[17],
                row[18],
                row[19],
                row[20],)
                users.append(user)
            return users
        except Exception as ex:
            raise Exception(ex)
        

    @classmethod
    def get_infoTROZA(cls, db):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT loteTROZA, fecha_ingresoTROZA, proveedorTROZA, receptorTROZA, remision_provTROZA, talo_salvoconductoTROZA, remi_salvoconductoTROZA, nombre_razonTROZA, entidadTROZA, no_registroTROZA, departamentoTROZA, municipioTROZA, veredaTROZA, transportadorTROZA, placaTROZA, comunTROZA, cientificoTROZA, presentacionTROZA, diametroTROZA, largoTROZA, volm3TROZA, M3ProvTROZA, CantidadProvTROZA  FROM agregar_infotroza"
            cursor.execute(sql)
            rows = cursor.fetchall()
            users = []
            for row in rows:
                user = Agregar_infoTROZA(
                # Asigna los valores a los atributos de info según corresponda
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                row[6],
                row[7],
                row[8],
                row[9],
                row[10],
                row[11],
                row[12],
                row[13],
                row[14],
                row[15],
                row[16],
                row[17],
                row[18],
                row[19],
                row[20],
                row[21],
                row[22],)
                users.append(user)
            return users
        except Exception as ex:
            raise Exception(ex)




class ValidadoInfo():

    @classmethod
    def get_anadir_pp(cls, db):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT id_lotePP, MAX(fechaPP), MAX(cantidadesxlargoPP), MAX(unidades_totalPP), MAX(pulg_totalPP), MAX(m3_totalPP), MAX(mp_gorgojoPP), MAX(sino_gorgojoPP), MAX(mp_partidaPP), MAX(sino_partidaPP), MAX(mp_fisicosPP), MAX(sino_fisicosPP), MAX(mp_quimicosPP), MAX(sino_quimicosPP), MAX(mp_biologicoPP), MAX(sino_biologicoPP), MAX(mp_validado_porPP)  FROM anadir_pp GROUP BY id_lotePP"
            cursor.execute(sql)
            rows = cursor.fetchall()
            users = []
            for row in rows:
                user = info_validado_pp(
                # Asigna los valores a los atributos de info según corresponda
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                row[6],
                row[7],
                row[8],
                row[9],
                row[10],
                row[11],
                row[12],
                row[13],
                row[14],
                row[15],
                row[16])
                users.append(user)
            return users
        except Exception as ex:
            raise Exception(ex)




    @classmethod
    def get_anadir_bloque(cls, db):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT id_loteBLOQUE, MAX(fechaBLOQUE), MAX(idBLOQUE), MAX(lado1BLOQUE), MAX(lado2BLOQUE), MAX(lengthBLOQUE), MAX(cantidadesxlargoBLOQUE), SUM(DISTINCT unidades_totalBLOQUE), SUM(DISTINCT pulg_totalBLOQUE), SUM(DISTINCT m3_totalBLOQUE), MAX(mp_gorgojoBLOQUE), MAX(sino_gorgojoBLOQUE), MAX(mp_partidaBLOQUE), MAX(sino_partidaBLOQUE), MAX(mp_fisicosBLOQUE), MAX(sino_fisicosBLOQUE), MAX(mp_quimicosBLOQUE), MAX(sino_quimicosBLOQUE), MAX(mp_biologicoBLOQUE), MAX(sino_biologicoBLOQUE), MAX(mp_validado_porBLOQUE) FROM anadir_bloque GROUP BY id_loteBLOQUE"
            cursor.execute(sql)
            rows = cursor.fetchall()
            users = []
            for row in rows:
                user = info_validado_bloque(
                # Asigna los valores a los atributos de info según corresponda
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                row[6],
                row[7],
                row[8],
                row[9],
                row[10],
                row[11],
                row[12],
                row[13],
                row[14],
                row[15],
                row[16],
                row[17],
                row[18],
                row[19],
                row[20],)
                users.append(user)
            return users
        except Exception as ex:
            raise Exception(ex)
        


    @classmethod
    def get_anadir_troza(cls, db):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT id_loteTROZA, MAX(fechaTROZA), SUM(DISTINCT unidades_totalTROZA), MAX(cantidadesxlargoTROZA), SUM(DISTINCT vol_m3_totalTROZA), MAX(mp_gorgojoTROZA), MAX(sino_gorgojoTROZA), MAX(mp_partidaTROZA), MAX(sino_partidaTROZA), MAX(mp_fisicosTROZA), MAX(sino_fisicosTROZA), MAX(mp_quimicosTROZA), MAX(sino_quimicosTROZA), MAX(mp_biologicoTROZA), MAX(sino_biologicoTROZA), MAX(mp_validado_porTROZA)  FROM anadir_troza GROUP BY id_loteTROZA"
            cursor.execute(sql)
            rows = cursor.fetchall()
            users = []
            for row in rows:
                user = info_validado_troza(
                # Asigna los valores a los atributos de info según corresponda
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                row[6],
                row[7],
                row[8],
                row[9],
                row[10],
                row[11],
                row[12],
                row[13],
                row[14],
                row[15],)
                users.append(user)
            return users
        except Exception as ex:
            raise Exception(ex)
