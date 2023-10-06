function goBack() {
    window.history.back();
}



var counter = 1; // Comenzamos en 1 para el primer ID

function agregarFilaBLOQUE() {
    var largoInput = document.getElementById("largo");
    var cantPulgInput = document.getElementById("cantPulg");

    // Obtener los valores ingresados por el usuario
    var largoValue = largoInput.value;
    var cantPulgValue = cantPulgInput.value;

    // Validar que ambos campos no estén vacíos
    if (largoValue.trim() === "" || cantPulgValue.trim() === "") {
        alert("Por favor, ingrese valores para 'Largo' y 'Cant. Pulg.'");
        return;
    }

    // Crear una nueva fila en la tabla
    var tbody = document.getElementById("cuerpoTablaBloque");
    var newRow = tbody.insertRow();
    newRow.id = "row" + counter;

    // Agregar celdas a la nueva fila
    var idCell = newRow.insertCell(0);
    idCell.textContent = counter;

    var largoCell = newRow.insertCell(1);
    largoCell.textContent = largoValue;

    var cantPulgCell = newRow.insertCell(2);
    cantPulgCell.textContent = cantPulgValue;

    // Columna Eliminar
    var eliminarCell = newRow.insertCell(3);
    var deleteIcon = document.createElement("i");
    deleteIcon.className = 'fas fa-trash-alt delete-icon';
    deleteIcon.onclick = function () { eliminarFilaBLOQUE(deleteIcon); };
    eliminarCell.appendChild(deleteIcon);

    // Limpiar los campos de entrada
    largoInput.value = "";
    cantPulgInput.value = "";

    // Actualizar el contador de filas
    counter++;

    // Actualizar la suma total
    updateTotalCantPulg();
}

function eliminarFilaBLOQUE(icon) {
    var fila = icon.parentNode.parentNode; // Obtener la fila padre del icono eliminar
    var cuerpoTabla = document.getElementById("cuerpoTablaBloque");

    cuerpoTabla.removeChild(fila);

    // Actualizar la suma total después de eliminar la fila
    updateTotalCantPulg();
}

function updateTotalCantPulg() {
    var filas = document.querySelectorAll("#cuerpoTablaBloque tr");
    var totalCantPulg = 0;

    for (var i = 0; i < filas.length; i++) {
        var fila = filas[i];
        var cantPulgCell = fila.cells[2]; // La tercera celda contiene "Cant. Pulg."
        var cantPulgValue = parseFloat(cantPulgCell.textContent);

        if (!isNaN(cantPulgValue)) {
            totalCantPulg += cantPulgValue;
        }
    }

    // Actualizar el valor del input "pulgadasBLOQUE" con la suma total
    var pulgadasBLOQUEInput = document.getElementById("pulgadasBLOQUE");
    pulgadasBLOQUEInput.value = totalCantPulg.toFixed(0);
}



const departamentos = {
    'Amazonas': ['LETICIA', 'PUERTO NARIÑO'],
    'Antioquia': ['MEDELLÍN', 'BELLO', 'ITAGÜÍ', 'ENVIGADO', 'APARTADÓ', 'TURBO', 'RIONEGRO', 'SABANETA', 'CAUCASIA', 'COPACABANA', 'CHIGORODÓ', 'LA ESTRELLA', 'NECOCLÍ', 'PUERTO BERRÍO', 'LA CEJA', 'MARINILLA', 'GIRARDOTA', 'BARBOSA', 'CAREPA', 'ANDES', 'EL CARMEN DE VIBORAL', 'GUARNE', 'EL BAGRE', 'SONSÓN', 'SEGOVIA', 'URRAO', 'YARUMAL', 'ARBOLETES', 'SANTA ROSA DE OSOS', 'TARAZÁ', 'AMAGÁ', 'SAN PEDRO DE URABÁ', 'CÁCERES', 'BOLÍVAR', 'SANTUARIO', 'SAN PEDRO DE LOS MILAGROS', 'ZARAGOZA', 'SAN VICENTE', 'ITUANGO', 'SANTA BÁRBARA', 'ANTIOQUIA', 'FREDONIA', 'CONCORDIA', 'SAN JUAN DE URABÁ', 'REMEDIOS', 'AMALFI', 'YOLOMBÓ', 'ABEJORRAL', 'DABEIBA', 'FRONTINO', 'SALGAR', 'SAN ROQUE', 'LA UNIÓN', 'NECHÍ', 'DONMATÍAS', 'EL RETIRO', 'PUERTO NARE', 'BETULIA', 'CAÑASGORDAS', 'VALDIVIA', 'PUERTO TRIUNFO', 'TÁMESIS', 'EL PEÑOL', 'JARDÍN', 'COCORNÁ', 'YONDÓ', 'SOPETRÁN', 'VENECIA', 'TITIRIBÍ', 'SAN RAFAEL', 'JERICÓ', 'ANGOSTURA', 'EBÉJICO', 'SAN CARLOS', 'SAN JERÓNIMO', 'SANTO DOMINGO', 'GÓMEZ PLATA', 'VEGACHÍ', 'SAN LUIS', 'BETANIA', 'MUTATÁ', 'ANORÍ', 'CISNEROS', 'GRANADA', 'LIBORINA', 'NARIÑO', 'ENTRERRÍOS', 'PUEBLORRICO', 'SABANALARGA', 'BRICEÑO', 'CAICEDO', 'ANGELÓPOLIS', 'ANGELÓPOLIS', 'PEQUE', 'MONTEBELLO', 'ANZÁ', 'URAMITA', 'GUATAPÉ', 'TARSO', 'LA PINTADA', 'ARGELIA', 'HELICONIA', 'BURITICÁ', 'VALPARAÍSO', 'SAN FRANCISCO', 'YALÍ', 'BELMIRA', 'GUADALUPE', 'CARAMANTA', 'VIGÍA DEL FUERTE', 'TOLEDO', 'ARMENIA', 'HISPANIA', 'CARACOLÍ', 'SAN ANDRÉS DE CUERQUIA', 'CONCEPCIÓN', 'GIRALDO', 'CAROLINA DEL PRÍNCIPE', 'ALEJANDRÍA', 'MURINDÓ', 'CAMPAMENTO', 'SAN JOSÉ DE LA MONTAÑA', 'OLAYA', 'ABRIAQUÍ'],
    'Arauca': ['ARAUCA', 'ARAUQUITA', 'CRAVO NORTE', 'FORTUL', 'PUERTO RONDON', 'SARAVENA', 'TAME'],
    'Atlántico': ['BARRANQUILLA', 'BARANOA', 'CAMPO DE LA CRUZ', 'CANDELARIA', 'GALAPA', 'JUAN DE ACOSTA', 'LURUACO', 'MALAMBO', 'MANATI', 'PALMAR DE VARELA', 'PIOJO', 'POLONUEVO', 'PONEDERA', 'PUERTO COLOMBIA', 'REPELON', 'SABANAGRANDE', 'SABANALARGA', 'SANTA LUCIA', 'SANTO TOMAS', 'SOLEDAD', 'SUAN', 'TUBARA', 'USIACURI'],
    'Bolívar': ['CARTAGENA DE INDIAS', 'MAGANGUÉ', 'EL CARMEN DE BOLÍVAR', 'TURBACO', 'ARJONA', 'MARÍA LA BAJA', 'SANTA CRUZ DE MOMPOX', 'SAN JUAN NEPOMUCENO', 'SAN PABLO', 'SANTA ROSA DEL SUR', 'MAHATES', 'PINILLOS', 'SAN JACINTO', 'CALAMAR', 'ACHÍ', 'TIQUISIO', 'SANTA ROSA', 'SIMITÍ', 'VILLANUEVA', 'SAN ESTANISLAO', 'RÍO VIEJO', 'BARRANCO DE LOBA', 'BRAZUELO DE PAPAYAL', 'NOROSÍ', 'SAN MARTÍN DE LOBA', 'TURBANÁ', 'MORALES', 'CÓRDOBA', 'SAN FERNANDO', 'SANTA CATALINA', 'CLEMENCIA', 'HATILLO DE LOBA', 'MONTECRISTO', 'CICUCO', 'TALAIGUA NUEVO', 'ALTOS DEL ROSARIO', 'ZAMBRANO', 'MARGARITA', 'ARROYOHONDO', 'SOPLAVIENTO', 'EL PEÑÓN', 'CANTAGALLO', 'EL GUAMO', 'ARENAL', 'SAN JACINTO DEL ', 'SAN CRISTÓBAL', 'REGIDOR'],
    'Boyacá': ['TUNJA', 'ALMEIDA', 'AQUITANIA', 'ARCABUCO', 'BELEN', 'BERBEO', 'BETEITIVA', 'BOAVITA', 'BOYACA', 'BRICEÑO', 'BUENAVISTA', 'BUSBANZA', 'CALDAS', 'CAMPOHERMOSO', 'CERINZA', 'CHINAVTA', 'CHIQUINQUIRA', 'CHISCAS', 'CHITA', 'CHITARAQUE', 'CHIVATA', 'CIENEGA', 'COMBITA', 'COPER', 'CORRALES', 'COVARACHIA', 'CUBARA', 'CUCAITA', 'CUITIVA', 'CHIQUIZA', 'CHIVOR', 'DUITAMA', 'EL COCUY', 'EL ESPINO', 'FIRAVITOBA', 'FLORESTA', 'GACHANTIVA', 'GAMEZA', 'GARAGOA', 'GUACAMAYAS', 'GUATEQUE', 'GUAYATA', 'GUICAN', 'IZA', 'JENESANO', 'JERICO', 'LABRANZAGRANDE', 'LA CAPILLA', 'LA VICTORIA', 'LA UVITA', 'VILLA DE LEYVA', 'MACANAL', 'MARIPI', 'MIRAFLORES', 'MONGUA', 'MONGUI', 'MONIQUIRA', 'MOTAVITA', 'MUZO', 'NOBSA', 'NUEVO COLON', 'OICATA', 'OTANCHE', 'PACHAVITA', 'PAEZ', 'PAIPA', 'PAJARITO', 'PANQUEBA', 'PAUNA', 'PAYA', 'PAZ DE RIO', 'PESCA', 'PISBA', 'PUERTO BOYACA', 'QUIPAMA', 'RAMIRIQUI', 'RAQUIRA', 'RONDON', 'SABOYA', 'SACHICA', 'SAMACA', 'SAN EDUARDO', 'SAN JOSE DE PARE', 'SAN LUIS DE GACENO', 'SAN MATEO', 'SAN MIGUEL DE SEMA', 'SAN PABLO BORBUR', 'SANTANA', 'SANTA MARIA', 'SAN ROSA VITERBO', 'SANTA SOFIA', 'SATIVANORTE', 'SATIVASUR', 'SIACHOQUE', 'SOATA', 'SOCOTA', 'SOCHA', 'SOGAMOSO', 'SOMONDOCO', 'SORA', 'SOTAQUIRA', 'SORACA', 'SUSACON', 'SUTAMARCHAN', 'SUTATENZA', 'TASCO', 'TENZA', 'TIBANA', 'TIBASOSA', 'TINJACA', 'TIPACOQUE', 'TOCA', 'TOGUI', 'TOPAGA', 'TOTA', 'TUNUNGUA', 'TURMEQUE', 'TUTA', 'TUTAZA', 'UMBITA', 'VENTAQUEMADA', 'VIRACACH', 'ZETAQUIRA'],
    'Caldas': ['MANIZALES', 'AGUADAS', 'ANSERMA', 'ARANZAZU', 'BELALCAZAR', 'CHINCHINA', 'FILADELFIA', 'LA DORADA', 'LA MERCED', 'MANZANARES', 'MARMATO', 'MARQUETALIA', 'MARULANDA', 'NEIRA', 'NORCASIA', 'PACORA', 'PALESTINA', 'PENSILVANIA', 'RIOSUCIO', 'RISARALDA', 'SALAMINA', 'SAMANA', 'SAN JOSE', 'SUPIA', 'VICTORIA', 'VILLAMARIA', 'VITERBO',],
    'Caquetá': ['FLORENCIA', 'ALBANIA', 'BELEN DE LOS ANDAQUIES', 'CARTAGENA DEL CHAIRA', 'CURRILLO', 'EL DONCELLO', 'EL PAUJIL', 'LA MONTAÑITA', 'MILAN', 'MORELIA', 'PUERTO RICO', 'SAN JOSE DEL FRAGUA', 'SAN VICENTE DEL CAGUAN', 'SOLANO', 'SOLITA', 'VALPARAISO'],
    'Casanare': ['YOPAL', 'AGUAZUL', 'CHAMEZA', 'HATO COROZAL', 'LA SALINA', 'MANI', 'MONTERREY', 'NUNCHIA', 'OROCUE', 'PAZ DE ARIPORO', 'PORE', 'RECETOR', 'SABANALARGA', 'SACAMA', 'SAN LUIS DE PALENQUE', 'TAMARA', 'TAURAMENA', 'TRINIDAD', 'VILLANUEVA'],
    'Cauca': ['POPAYAN', 'ALMAGUER', 'ARGELIA', 'BALBOA', 'BOLIVAR', 'BUENOS AIRES', 'CAJIBIO', 'CALDONO', 'CALOTO', 'CORINTO', 'EL TAMBO', 'FLORENCIA', 'GUACHENE', 'GUAPI', 'INZA', 'JAMBALO', 'LA SIERRA', 'LA VEGA', 'LOPEZ', 'MERCADERES', 'MIRANDA', 'MORALES', 'PADILLA', 'PAEZ', 'PATIA', 'PIAMONTE', 'PIENDAMO', 'PUERTO TEJADA', 'PURACE', 'ROSAS', 'SAN SEBASTIAN', 'SANTANDER DE QUILICHAO', 'SANTA ROSA', 'SILVIA', 'SOTARA', 'SUAREZ', 'SUCRE', 'TIMBIO', 'TIMBIQUI', 'TORIBIO', 'TOTORO', 'VILLA', 'RICA'],
    'Cesar': ['VALLEDUPAR', 'AGUACHICA', 'AGUSTIN CODAZZI', 'ASTREA', 'BECERRIL', 'BOSCONIA', 'CHIMICHAGUA', 'CHIRIGUANA', 'CURUMANI', 'EL COPEY', 'EL PASO', 'GAMARRA', 'GONZALEZ', 'LA GLORIA', 'LA JAGUA DE IBIRICO', 'MANAURE', 'PAILITAS', 'PELAYA', 'PUEBLO BELLO', 'RIO DE ORO', 'LA PAZ', 'SAN ALBERTO', 'SAN DIEGO', 'SAN MARTIN', 'TAMALAMEQUE'],
    'Chocó': ['QUIBDO', 'ACANDI', 'ALTO BAUDO', 'ATRATO', 'BAGADO', 'BAHIA SOLANO', 'BAJO BAUDO', 'BOJAYA', 'CANTON DE SAN PABLO', 'CARMEN DEL DARIEN', 'CERTEGUI', 'CONDOTO', 'EL CARMEN DE ATRATO', 'EL LITORAL DEL SAN JUAN', 'ITSMINA', 'JURADO', 'LLORO', 'MEDIO ATRATO', 'MEDIO BAUDÓ', 'MEDIO SAN JUAN', 'NOVITA', 'NUQUI', 'RIO IRO', 'RIO QUITO', 'RIOSUCIO', 'SAN JOSE DEL PALMAR', 'SIPI', 'TADO', 'UNGUIA', 'UNION PANAMERICANA'],
    'Córdoba': ['MONTERIA', 'AYAPEL', 'BUENAVISTA', 'CANALETE', 'CERETE', 'CHIMA', 'CHINU', 'CIENAGA DE ORO', 'COTORRA', 'LA APARTADA', 'LORICA', 'LOS CORDOBAS', 'MOMIL', 'MONTELIBANO', 'MOÑITOS', 'PLANETA RICA', 'PUEBLO NUEVO', 'PUERTO ESCONDIDO', 'PUERTO LIBERTADOR', 'PURISIMA', 'SAHAGUN', 'SAN ANDRES SOTAVENTO', 'SAN ANTERO', 'SAN BERNARDO DEL VIENTO', 'SAN CARLOS', 'SAN JOSE DE URE', 'SAN PELAYO', 'TIERRALTA', 'TUCHIN', 'VALENCIA'],
    'Cundinamarca': ['AGUA DE DIOS', 'ALBAN', 'ANAPOIMA', 'ANOLAIMA', 'ARBELAEZ', 'BELTRAN', 'BITUIMA', 'BOGOTÁ', 'BOJACA', 'CABRERA', 'CACHIPAY', 'CAJICA', 'CAPARRAPI', 'CAQUEZA', 'CARMEN DE CARUPA', 'CHAGUANI', 'CHIA', 'CHIPAQUE', 'CHOACHI', 'CHOCONTA', 'COGUA', 'COTA', 'CUCUNUBA', 'EL COLEGIO', 'EL PEÑON', 'EL ROSAL', 'FACATATIVA', 'FOMEQUE', 'FOSCA', 'FUNZA', 'FUQUENE', 'FUSAGASUGA', 'GACHALA', 'GACHANCIPA', 'GACHETA', 'GAMA', 'GIRARDOT', 'GRANADA', 'GUACHETA', 'GUADUAS', 'GUASCA', 'GUATAQUI', 'GUATAVITA', 'GUAYABAL DE SIQUIMA', 'GUAYABETAL', 'GUTIERREZ', 'JERUSALEN', 'JUNIN', 'LA CALERA', 'LA MESA', 'LA PALMA', 'LA PEÑA', 'LA VEGA', 'LENGUAZAQUE', 'MACHETA', 'MADRID', 'MANTA', 'MEDINA', 'MOSQUERA', 'NARIÑO', 'NEMOCON', 'NILO', 'NIMAIMA', 'NOCAIMA', 'VENECIA', 'PACHO', 'PAIME', 'PANDI', 'PARATEBUENO', 'PASCA', 'PUERTO SALGAR', 'PULI', 'QUEBRADANEGRA', 'QUETAME', 'QUIPILE', 'APULO', 'RICAURTE', 'SAN ANTONIO DE TEQUENDAMA', 'SAN BERNARDO', 'SAN CAYETANO', 'SAN FRANCISCO', 'SAN JUAN DE RIO SECO', 'SASAIMA', 'SESQUILE', 'SIBATE', 'SILVANIA', 'SIMIJACA', 'SOACHA', 'SOPO', 'SUBACHOQUE', 'SUESCA', 'SUPATA', 'SUSA', 'SUTATAUSA', 'TABIO', 'TAUSA', 'TENA', 'TENJO', 'TIBACUY', 'TIBIRITA', 'TOCAIMA', 'TOCANCIPA', 'TOPAIPI', 'UBALA', 'UBAQUE', 'UBATE', 'UNE', 'UTICA', 'VERGARA', 'VIANI', 'VILLAGOMEZ', 'VILLAPINZON', 'VILLETA', 'VIOTA', 'YACOPI', 'ZIPACON', 'ZIPAQUIRA'],
    'Guainía': ['INIRIDA', 'BARRANCOMINAS', 'MAPIRIPANA', 'SAN FELIPE', 'PUERTO COLOMBIA', 'LA GUADALUPE', 'CACAHUAL', 'PANA PANA', 'MORICHAL'],
    'Guaviare': ['SAN JOSÉ DEL GUAVIARE', 'CALAMAR', 'EL RETORNO', 'MIRAFLORES'],
    'Huila': ['NEIVA', 'ACEVEDO', 'AGRADO', 'AIPE', 'ALGECIRAS', 'ALTAMIRA', 'BARAYA', 'CAMPOALEGRE', 'COLOMBIA', 'ELIAS', 'GARZON', 'GIGANTE', 'GUADALUPE', 'HOBO', 'IQUIRA', 'ISNOS', 'LA ARGENTINA', 'LA PLATA', 'NATAGA', 'OPORAPA', 'PAICOL', 'PALERMO', 'PALESTINA', 'PITAL', 'PITALITO', 'RIVERA', 'SALADOBLANCO', 'SAN AGUSTIN', 'SANTA MARIA', 'SUAZA', 'TARQUI', 'TESALIA', 'TELLO', 'TERUEL', 'TIMANA', 'VILLAVIEJA', 'YAGUARA'],
    'Guajira': ['RIOHACHA', 'ALBANIA', 'BARRANCAS', 'DIBULLA', 'DISTRACCION', 'MOLINO', 'FONSECA', 'HATONUEVO', 'JAGUA DEL PILAR', 'MAICAO', 'MANAURE', 'SAN JUAN DEL CESAR', 'URIBIA', 'URUMITA', 'VILLANUEVA'],
    'Magdalena': ['SANTA MARTA', 'ALGARROBO', 'ARACATACA', 'ARIGUANI', 'CERRO SAN ANTONIO', 'CHIVOLO', 'CIENAGA', 'CONCORDIA', 'EL BANCO', 'EL PIÑON', 'EL RETEN', 'FUNDACION', 'GUAMAL', 'NUEVA GRANADA', 'PEDRAZA', 'PIJIÑO DEL CARMEN', 'PIVIJAY', 'PLATO', 'PUEBLOVIEJO', 'REMOLINO', 'SABANAS DE SAN ANGEL', 'SALAMINA', 'SAN SEBASTIAN DE BUENAVISTA', 'SAN ZENON', 'SANTA ANA', 'SANTA BARBARA DE PINTO', 'SITIONUEVO', 'TENERIFE', 'ZAPAYAN', 'ZONA BANANERA'],
    'Meta': ['VILLAVICENCIO', 'ACACIAS', 'BARRANCA DE UPIA', 'CABUYARO', 'CASTILLA LA NUEVA', 'CUBARRAL', 'CUMARAL', 'EL CALVARIO', 'EL CASTILLO', 'EL DORADO', 'FUENTE DE ORO', 'GRANADA', 'GUAMAL', 'MAPIRIPAN', 'MESETAS', 'LA MACARENA', 'LA URIBE', 'LEJANIAS', 'PUERTO CONCORDIA', 'PUERTO GAITAN', 'PUERTO LOPEZ', 'PUERTO LLERAS', 'PUERTO RICO', 'RESTREPO', 'SAN CARLOS GUAROA', 'SAN JUAN DE ARAMA', 'SAN JUANITO', 'SAN MARTIN', 'VISTA HERMOSA'],
    'Nariño': ['PASTO', 'ALBAN', 'ALDANA', 'ANCUYA', 'ARBOLEDA', 'BARBACOAS', 'BELEN', 'BUESACO', 'COLON', 'CONSACA', 'CONTADERO', 'CORDOBA', 'CUASPUD', 'CUMBAL', 'CUMBITARA', 'CHACHAGUI', 'EL CHARCO', 'EL PEÑOL', 'EL ROSARIO', 'EL TABLON DE GOMEZ', 'EL TAMBO', 'FUNES', 'GUACHUCAL', 'GUAITARILLA', 'GUALMATAN', 'ILES', 'IMUES', 'IPIALES', 'LA CRUZ', 'LA FLORIDA', 'LA LLANADA', 'LA TOLA', 'LA UNION', 'LEIVA', 'LINARES', 'LOS ANDES', 'MAGUI', 'MALLAMA', 'MOSQUERA', 'OLAYA HERRERA', 'OSPINA', 'FRANCISCO PIZARRO', 'POLICARPA', 'POTOSI', 'PROVIDENCIA', 'PUERRES', 'PUPIALES', 'RICAURTE', 'ROBERTO PAYAN', 'SAMANIEGO', 'SANDONA', 'SAN BERNARDO', 'SAN LORENZO', 'SAN PABLO', 'SAN PEDRO DE CARTAGO', 'SANTA BARBARA', 'SANTACRUZ', 'SAPUYES', 'TAMINANGO', 'TANGUA', 'TUMACO', 'TUQUERRES', 'YACUANQUER'],
    'Norte de Santander': ['CUCUTA', 'ABREGO', 'ARBOLEDAS', 'BOCHALEMA', 'BUCARASICA', 'CACOTA', 'CACHIRA', 'CHINACOTA', 'CHITAGA', 'CONVENCION', 'CUCUTILLA', 'DURANIA', 'EL CARMEN', 'EL TARRA', 'EL ZULIA', 'GRAMALOTE', 'HACARI', 'HERRAN', 'LABATECA', 'LA ESPERANZA', 'LA PLAYA', 'LOS PATIOS', 'LOURDES', 'MUTISCUA', 'OCAÑA', 'PAMPLONA', 'PAMPLONITA', 'PUERTO SANTANDER', 'RAGONVALIA', 'SALAZAR', 'SAN CALIXTO', 'SAN CAYETANO', 'SANTIAGO', 'SARDINATA', 'SILOS', 'TEORAMA', 'TIBU', 'TOLEDO', 'VILLA CARO', 'VILLA DEL ROSARIO'],
    'Putumayo': ['MOCOA', 'COLON', 'ORITO', 'PUERTO ASIS', 'PUERTO CAICEDO', 'PUERTO GUZMAN', 'LEGUIZAMO', 'SIBUNDOY', 'SAN FRANCISCO', 'SAN MIGUEL', 'SANTIAGO', 'VALLE DEL GUAMUEZ', 'VILLAGARZON'],
    'Quindío': ['ARMENIA', 'BUENAVISTA', 'CALARCÁ', 'CIRCASIA', 'CÓRDOBA', 'FILANDIA', 'GÉNOVA', 'LA TEBAIDA', 'MONTENEGRO', 'PIJAO', 'QUIMBAYA', 'SALENTO'],
    'Risaralda': ['PEREIRA', 'APIA', 'BALBOA', 'BELEN DE UMBRIA', 'DOS QUEBRADAS', 'GUATICA', 'LA CELIA', 'LA VIRGINIA', 'MARSELLA', 'MISTRATO', 'PUEBLO RICO', 'QUINCHIA', 'SANTA ROSA DE CABAL', 'SANTUARIO'],
    'San Andrés y Providencia': ['SAN ANDRÉS', 'PROVIDENCIA'],
    'Santander': ['BUCARAMANGA', 'AGUADA', 'ALBANIA', 'ARATOCA', 'BARBOSA', 'BARICHARA', 'BARRANCABERMEJA', 'BETULIA', 'BOLIVAR', 'CABRERA', 'CALIFORNIA', 'CAPITANEJO', 'CARCASI', 'CEPITA', 'CERRITO', 'CHARALA', 'CHARTA', 'CHIMA', 'CHIPATA', 'CIMITARRA', 'CONCEPCION', 'CONFINES', 'CONTRATACION', 'COROMORO', 'CURITI', 'EL CARMEN DE CHUCURI', 'EL GUACAMAYO', 'EL PEÑON', 'EL PLAYON', 'ENCINO', 'ENCISO', 'FLORIAN', 'FLORIDABLANCA', 'GALAN', 'GAMBITA', 'GIRON', 'GUACA', 'GUADALUPE', 'GUAPOTA', 'GUAVATA', 'GUEPSA', 'HATO', 'JESUS', 'MARIA', 'JORDAN', 'LA BELLEZA', 'LANDAZURI', 'LA PAZ', 'LEBRIJA', 'LOS SANTOS', 'MACARAVITA', 'MALAGA', 'MATANZA', 'MOGOTES', 'MOLAGAVITA', 'OCAMONTE', 'OIBA', 'ONZAGA', 'PALMAR', 'PALMAS DEL SOCORRO', 'PARAMO PIEDECUESTA', 'PINCHOTE', 'PUENTE NACIONAL', 'PUERTO PARRA', 'PUERTO WILCHES', 'RIONEGRO', 'SABANA DE TORRES', 'SAN ANDRES', 'SAN BENITO', 'SAN GIL', 'SAN JOAQUIN', 'SAN JOSE DE MIRANDA', 'SAN MIGUEL', 'SAN VICENTE DE CHUCURI', 'SANTA BARBARA', 'SANTA HELENA DEL OPON', 'SIMACOTA', 'SOCORRO', 'SUAITA', 'SUCRE', 'SURATA', 'TONA', 'VALLE DE SAN JOSE', 'VELEZ', 'VETAS', 'VILLANUEVA', 'ZAPATOCA'],
    'Sucre': ['SINCELEJO', 'BUENAVISTA', 'CAIMITO', 'COLOSO', 'COROZAL', 'COVEÑAS', 'CHALAN', 'EL ROBLE', 'GALERAS', 'GUARANDA', 'LA UNION', 'LOS PALMITOS', 'MAJAGUAL', 'MORROA', 'OVEJAS', 'PALMITO', 'SAMPUES', 'SAN BENITO ABAD', 'SAN JUAN BETULIA', 'SAN MARCOS', 'SAN ONOFRE', 'SAN PEDRO', 'SINCE', 'SANTIAGO DE TOLU', 'TOLU VIEJO'],
    'Tolima': ['IBAGUÉ', 'ALPUJARRA', 'ALVARADO', 'AMBALEMA', 'ANZOÁTEGUI', 'ARMERO', 'ATACO', 'CAJAMARCA', 'CARMEN DE APICALÁ', 'CASABIANCA', 'CHAPARRAL', 'COELLO', 'COYAIMA', 'CUNDAY', 'DOLORES', 'ESPINAL', 'FALAN', 'FLANDES', 'FRESNO', 'GUAMO', 'HERVEO', 'HONDA', 'ICONONZO', 'LÉRIDA', 'LÍBANO', 'MARIQUITA', 'MELGAR', 'MURILLO', 'NATAGAIMA', 'ORTEGA', 'PALOCABILDO', 'PIEDRAS', 'PLANADAS', 'PRADO', 'PURIFICACIÓN', 'RIOBLANCO', 'RONCESVALLES', 'ROVIRA', 'SALDAÑA', 'SAN ANTONIO', 'SAN LUIS', 'SANTA ISABEL', 'SUÁREZ', 'VALLE DE SAN JUAN', 'VENADILLO', 'VILLAHERMOSA', 'VILLARRICA'],
    'Valle del Cauca': ['CALI', 'ALCALA', 'ANDALUCIA', 'ANSERMANUEVO', 'ARGELIA', 'BOLIVAR', 'BUENAVENTURA', 'BUGA', 'BUGALAGRANDE', 'CAICEDONIA', 'CALIMA', 'CANDELARIA', 'CARTAGO', 'DAGUA', 'EL AGUILA', 'EL CAIRO', 'EL CERRITO', 'EL DOVIO', 'FLORIDA', 'GINEBRA', 'GUACARI', 'JAMUNDI', 'LA CUMBRE', 'LA UNION', 'LA VICTORIA', 'OBANDO', 'PALMIRA', 'PRADERA', 'RESTREPO', 'RIOFRIO', 'ROLDANILLO', 'SAN PEDRO', 'SEVILLA', 'TORO', 'TRUJILLO', 'TULUA', 'ULLOA', 'VERSALLES', 'VIJES', 'YOTOCO', 'YUMBO', 'ZARZAL'],
    'Vaupés': ['MITU', 'CARURU', 'PACOA', 'TARAIRA', 'PAPUNAHUA', 'YAVARATE'],
    'Vichada': ['CUMARIBO', 'LA PRIMAVERA', 'PUERTO CARREÑO', 'SANTA ROSALIA'],
    // ...
};

const selectDepartamento = document.getElementById("departamentoBLOQUE");
const selectMunicipio = document.getElementById("municipioBLOQUE");

// Cargar opciones de departamento
for (const departamento in departamentos) {
    const option = document.createElement("option");
    option.value = departamento;
    option.text = departamento;
    selectDepartamento.appendChild(option);
}

// Función para cargar opciones de municipio
function cargarMunicipios() {
    // Eliminar opciones de municipio actuales
    selectMunicipio.innerHTML = "";

    // Obtener departamento seleccionado
    const departamento = selectDepartamento.value;

    // Cargar opciones de municipio correspondientes al departamento seleccionado
    for (const municipio of departamentos[departamento]) {
        const option = document.createElement("option");
        option.value = municipio;
        option.text = municipio;
        selectMunicipio.appendChild(option);
    }
}

var fechaActual = new Date();
var dia = ("0" + fechaActual.getDate()).slice(-2);
var mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
var anio = fechaActual.getFullYear();
var fechaFormateada = anio + "-" + mes + "-" + dia;
document.getElementById("fecha_ingresoBLOQUE").value = fechaFormateada;


window.onload = function () {
    alert("Ten en cuenta generar un informe de LOTE uno a la vez... 😉🌲");
};





function submitForm() {
    // Muestra una ventana emergente de confirmación
    var userConfirmed = window.confirm("¿Desea continuar y enviar el formulario? Ten en cuenta que una vez enviado no se podra eliminar!!!.");

    // Si el usuario hace clic en "Aceptar" (true), envía el formulario
    if (userConfirmed) {
        var cuerpoTabla = document.getElementById("cuerpoTablaBloque");
        var rows = cuerpoTabla.getElementsByTagName("tr");
        var infotablebloque = [];

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var length = row.querySelector("td:nth-child(2)").textContent;
            var cantpulg = row.querySelector("td:nth-child(3)").textContent;
            infotablebloque.push(cantpulg + ":" + length);
        }

        // Join the array elements with a "|" delimiter
        var infotablebloqueString = infotablebloque.join("|");

        // Store infotablebloqueString in a hidden input field for form submission
        var infotablebloqueInput = document.createElement("input");
        infotablebloqueInput.type = "hidden";
        infotablebloqueInput.name = "infotablebloque";
        infotablebloqueInput.value = infotablebloqueString;
        document.getElementById("myForm").appendChild(infotablebloqueInput);

        // Log infotablebloque to the console
        console.log("infotablebloque:", infotablebloqueString);

        // Submit the form
        document.getElementById("myForm").submit();
    } else {
        // Si el usuario hace clic en "Cancelar" (false), no se envía el formulario
        alert("Envío de formulario cancelado.");
    }
}
