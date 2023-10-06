from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, id, username, password, fullname="", rol="", sesion=0):
        self.id = id
        self.username = username
        self.password = password
        self.fullname = fullname
        self.rol = rol
        self.sesion = sesion
        
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'fullname': self.fullname,
            'rol': self.rol,
            'sesion': self.sesion
        }

    @classmethod
    def check_password(self, hashed_password, password):
        return check_password_hash(hashed_password, password)
    
    @staticmethod
    def hash_password(password):
        return generate_password_hash(password)
    
    
class AgregarInfoLOTE():
    def __init__(self, lote):
        self.lote = lote

class Agregar_infoPP():
    def __init__(self, lotePP, fecha_ingresoPP, proveedorPP, receptorPP, remision_provPP, talo_salvoconductoPP, remi_salvoconductoPP, nombre_razonPP, entidadPP, no_registroPP, departamentoPP, municipioPP, veredaPP, transportadorPP, placaPP, comunPP, cientificoPP, presentacionPP, idPP, calibrePP, anchoPP, largoPP, cantidadPP, m3PP, pulgPP, cantidadtotalPP):
        self.lotePP = lotePP
        self.fecha_ingresoPP = fecha_ingresoPP
        self.proveedorPP = proveedorPP
        self.receptorPP = receptorPP
        self.remision_provPP = remision_provPP
        self.talo_salvoconductoPP = talo_salvoconductoPP
        self.remi_salvoconductoPP = remi_salvoconductoPP
        self.nombre_razonPP = nombre_razonPP
        self.entidadPP = entidadPP
        self.no_registroPP = no_registroPP
        self.departamentoPP = departamentoPP
        self.municipioPP = municipioPP
        self.veredaPP = veredaPP
        self.transportadorPP = transportadorPP
        self.placaPP = placaPP
        self.comunPP = comunPP
        self.cientificoPP = cientificoPP
        self.presentacionPP = presentacionPP
        self.idPP = idPP
        self.calibrePP = calibrePP
        self.anchoPP = anchoPP
        self.largoPP = largoPP
        self.cantidadPP = cantidadPP
        self.m3PP = m3PP
        self.pulgPP = pulgPP
        self.cantidadtotalPP = cantidadtotalPP
        


class Agregar_infoBLOQUE():
    def __init__(self, loteBLOQUE, fecha_ingresoBLOQUE, proveedorBLOQUE, receptorBLOQUE, remision_provBLOQUE, talo_salvoconductoBLOQUE, remi_salvoconductoBLOQUE, nombre_razonBLOQUE, entidadBLOQUE, no_registroBLOQUE, departamentoBLOQUE, municipioBLOQUE, veredaBLOQUE, transportadorBLOQUE, placaBLOQUE, comunBLOQUE, cientificoBLOQUE, presentacionBLOQUE, medidaBLOQUE, cantpulgBLOQUE, pulgadasBLOQUE):
        self.loteBLOQUE = loteBLOQUE
        self.fecha_ingresoBLOQUE = fecha_ingresoBLOQUE
        self.proveedorBLOQUE = proveedorBLOQUE
        self.receptorBLOQUE = receptorBLOQUE
        self.remision_provBLOQUE = remision_provBLOQUE
        self.talo_salvoconductoBLOQUE = talo_salvoconductoBLOQUE
        self.remi_salvoconductoBLOQUE = remi_salvoconductoBLOQUE
        self.nombre_razonBLOQUE = nombre_razonBLOQUE
        self.entidadBLOQUE = entidadBLOQUE
        self.no_registroBLOQUE = no_registroBLOQUE
        self.departamentoBLOQUE = departamentoBLOQUE
        self.municipioBLOQUE = municipioBLOQUE
        self.veredaBLOQUE = veredaBLOQUE
        self.transportadorBLOQUE = transportadorBLOQUE
        self.placaBLOQUE = placaBLOQUE
        self.comunBLOQUE = comunBLOQUE
        self.cientificoBLOQUE = cientificoBLOQUE
        self.presentacionBLOQUE = presentacionBLOQUE
        self.medidaBLOQUE = medidaBLOQUE
        self.cantpulgBLOQUE = cantpulgBLOQUE
        self.pulgadasBLOQUE = pulgadasBLOQUE

class Agregar_infoTROZA():
    def __init__(self, loteTROZA, fecha_ingresoTROZA, proveedorTROZA, receptorTROZA, remision_provTROZA, talo_salvoconductoTROZA, remi_salvoconductoTROZA, nombre_razonTROZA, entidadTROZA, no_registroTROZA, departamentoTROZA, municipioTROZA, veredaTROZA, transportadorTROZA, placaTROZA, comunTROZA, cientificoTROZA, presentacionTROZA, diametroTROZA, largoTROZA, volm3TROZA, M3ProvTROZA, CantidadProvTROZA):
        self.loteTROZA = loteTROZA
        self.fecha_ingresoTROZA = fecha_ingresoTROZA
        self.proveedorTROZA = proveedorTROZA
        self.receptorTROZA = receptorTROZA
        self.remision_provTROZA = remision_provTROZA
        self.talo_salvoconductoTROZA = talo_salvoconductoTROZA
        self.remi_salvoconductoTROZA = remi_salvoconductoTROZA
        self.nombre_razonTROZA = nombre_razonTROZA
        self.entidadTROZA = entidadTROZA
        self.no_registroTROZA = no_registroTROZA
        self.departamentoTROZA = departamentoTROZA
        self.municipioTROZA = municipioTROZA
        self.veredaTROZA = veredaTROZA
        self.transportadorTROZA = transportadorTROZA
        self.placaTROZA = placaTROZA
        self.comunTROZA = comunTROZA
        self.cientificoTROZA = cientificoTROZA
        self.presentacionTROZA = presentacionTROZA
        self.diametroTROZA = diametroTROZA
        self.largoTROZA = largoTROZA
        self.volm3TROZA = volm3TROZA
        self.M3ProvTROZA = M3ProvTROZA
        self.CantidadProvTROZA = CantidadProvTROZA




class info_validado_pp():
    def __init__(self, id_lotePP, fechaPP, cantidadesxlargoPP, unidades_totalPP, pulg_totalPP, m3_totalPP,  mp_gorgojoPP, sino_gorgojoPP, mp_partidaPP, sino_partidaPP, mp_fisicosPP, sino_fisicosPP, mp_quimicosPP, sino_quimicosPP, mp_biologicoPP, sino_biologicoPP, mp_validado_porPP):
        self.id_lotePP = id_lotePP
        self.fechaPP = fechaPP
        self.cantidadesxlargoPP = cantidadesxlargoPP
        self.unidades_totalPP = unidades_totalPP
        self.pulg_totalPP = pulg_totalPP
        self.m3_totalPP = m3_totalPP
        self.mp_gorgojoPP = mp_gorgojoPP
        self.sino_gorgojoPP = sino_gorgojoPP
        self.mp_partidaPP = mp_partidaPP
        self.sino_partidaPP = sino_partidaPP
        self.mp_fisicosPP = mp_fisicosPP
        self.sino_fisicosPP = sino_fisicosPP
        self.mp_quimicosPP = mp_quimicosPP
        self.sino_quimicosPP = sino_quimicosPP
        self.mp_biologicoPP = mp_biologicoPP
        self.sino_biologicoPP = sino_biologicoPP
        self.mp_validado_porPP = mp_validado_porPP

class info_validado_bloque():
    def __init__(self, id_loteBLOQUE, fechaBLOQUE, idBLOQUE, lado1BLOQUE, lado2BLOQUE, lengthBLOQUE, cantidadesxlargoBLOQUE, unidades_totalBLOQUE, pulg_totalBLOQUE, m3_totalBLOQUE, mp_gorgojoBLOQUE, sino_gorgojoBLOQUE, mp_partidaBLOQUE, sino_partidaBLOQUE, mp_fisicosBLOQUE, sino_fisicosBLOQUE, mp_quimicosBLOQUE, sino_quimicosBLOQUE, mp_biologicoBLOQUE, sino_biologicoBLOQUE, mp_validado_porBLOQUE):
        self.id_loteBLOQUE = id_loteBLOQUE
        self.fechaBLOQUE = fechaBLOQUE
        self.idBLOQUE = idBLOQUE
        self.lado1BLOQUE = lado1BLOQUE
        self.lado2BLOQUE = lado2BLOQUE
        self.lengthBLOQUE = lengthBLOQUE
        self.cantidadesxlargoBLOQUE = cantidadesxlargoBLOQUE
        self.unidades_totalBLOQUE = unidades_totalBLOQUE
        self.pulg_totalBLOQUE = pulg_totalBLOQUE
        self.m3_totalBLOQUE = m3_totalBLOQUE
        self.mp_gorgojoBLOQUE = mp_gorgojoBLOQUE
        self.sino_gorgojoBLOQUE = sino_gorgojoBLOQUE
        self.mp_partidaBLOQUE = mp_partidaBLOQUE
        self.sino_partidaBLOQUE = sino_partidaBLOQUE
        self.mp_fisicosBLOQUE = mp_fisicosBLOQUE
        self.sino_fisicosBLOQUE = sino_fisicosBLOQUE
        self.mp_quimicosBLOQUE = mp_quimicosBLOQUE
        self.sino_quimicosBLOQUE = sino_quimicosBLOQUE
        self.mp_biologicoBLOQUE = mp_biologicoBLOQUE
        self.sino_biologicoBLOQUE = sino_biologicoBLOQUE
        self.mp_validado_porBLOQUE = mp_validado_porBLOQUE


class info_validado_troza():
    def __init__(self, id_loteTROZA, fechaTROZA, unidades_totalTROZA, cantidadesxlargoTROZA, vol_m3_totalTROZA, mp_gorgojoTROZA, sino_gorgojoTROZA, mp_partidaTROZA, sino_partidaTROZA, mp_fisicosTROZA, sino_fisicosTROZA, mp_quimicosTROZA, sino_quimicosTROZA, mp_biologicoTROZA, sino_biologicoTROZA, mp_validado_porTROZA):
        self.id_loteTROZA = id_loteTROZA
        self.fechaTROZA = fechaTROZA
        self.unidades_totalTROZA = unidades_totalTROZA
        self.cantidadesxlargoTROZA = cantidadesxlargoTROZA
        self.vol_m3_totalTROZA = vol_m3_totalTROZA
        self.mp_gorgojoTROZA = mp_gorgojoTROZA
        self.sino_gorgojoTROZA = sino_gorgojoTROZA
        self.mp_partidaTROZA = mp_partidaTROZA
        self.sino_partidaTROZA = sino_partidaTROZA
        self.mp_fisicosTROZA = mp_fisicosTROZA
        self.sino_fisicosTROZA = sino_fisicosTROZA
        self.mp_quimicosTROZA = mp_quimicosTROZA
        self.sino_quimicosTROZA = sino_quimicosTROZA
        self.mp_biologicoTROZA = mp_biologicoTROZA
        self.sino_biologicoTROZA = sino_biologicoTROZA
        self.mp_validado_porTROZA = mp_validado_porTROZA


