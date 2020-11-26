/ *!
 * Biblioteca jQuery JavaScript v3.5.1
 * https://jquery.com/
 *
 * Incluye Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores
 * Publicado bajo la licencia MIT
 * https://jquery.org/license
 *
 * Fecha: 2020-05-04T22: 49Z
 * /
(función (global, fábrica) {

	"uso estricto";

	if (typeof module === "object" && typeof module.exports === "object") {

		// Para entornos CommonJS y CommonJS-like donde una `ventana` adecuada
		// está presente, ejecuta la fábrica y obtén jQuery.
		// Para entornos que no tienen una `ventana` con un` documento`
		// (como Node.js), expone una fábrica como module.exports.
		// Esto acentúa la necesidad de crear una `ventana` real.
		// por ejemplo, var jQuery = require ("jquery") (ventana);
		// Ver boleto # 14549 para más información.
		module.exports = global.document?
			fábrica (global, verdadero):
			función (w) {
				if (! w.document) {
					lanzar un nuevo error ("jQuery requiere una ventana con un documento");
				}
				retorno de fábrica (w);
			};
	} más {
		fábrica (global);
	}

// Pasa esto si la ventana aún no está definida
}) (typeof window! == "undefined"? window: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lanzar excepciones cuando el código no estricto (por ejemplo, ASP.NET 4.5) accede al modo estricto
// argumentos.callee.caller (trac-13335). Pero a partir de jQuery 3.0 (2016), el modo estricto debería ser común
// suficiente para que todos estos intentos estén protegidos en un bloque try.
"uso estricto";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat? función (matriz) {
	return arr.flat.call (matriz);
}: función (matriz) {
	return arr.concat.apply ([], matriz);
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Objeto);

var support = {};

var isFunction = function isFunction (obj) {

      // Soporte: Chrome <= 57, Firefox <= 52
      // En algunos navegadores, typeof devuelve "función" para elementos HTML <object>
      // (es decir, `typeof document.createElement (" objeto ") ===" función "`).
      // No queremos clasificar * ningún * nodo DOM como una función.
      return typeof obj === "function" && typeof obj.nodeType! == "number";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};


var document = window.document;



	var preserveScriptAttributes = {
		tipo: verdadero,
		src: cierto,
		nonce: cierto,
		noModule: verdadero
	};

	función DOMEval (código, nodo, doc) {
		doc = doc || documento;

		var i, val,
			script = doc.createElement ("script");

		script.text = código;
		si (nodo) {
			para (i en protectedScriptAttributes) {

				// Soporte: Firefox 64+, Edge 18+
				// Algunos navegadores no admiten la propiedad "nonce" en los scripts.
				// Por otro lado, usar `getAttribute` no es suficiente ya que
				// el atributo `nonce` se restablece a una cadena vacía siempre que
				// se conecta al contexto de navegación.
				// Ver https://github.com/whatwg/html/issues/2369
				// Ver https://html.spec.whatwg.org/#nonce-attributes
				// La comprobación `node.getAttribute` se agregó por el bien de
				// `jQuery.globalEval` para que pueda falsificar un nodo que contenga nonce
				// a través de un objeto.
				val = nodo [i] || node.getAttribute && node.getAttribute (i);
				if (val) {
					script.setAttribute (i, val);
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


función toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Soporte: Android <= 2.3 solamente (RegExp funcional)
	tipo de retorno de obj === "objeto" || typeof obj === "función"?
		class2type [toString.call (obj)] || "objeto":
		typeof obj;
}
/ * Símbolo global * /
// Definir este global en .eslintrc.json crearía el peligro de usar el global
// sin vigilancia en otro lugar, parece más seguro definir global solo para este módulo



var
	version = "3.5.1",

	// Definir una copia local de jQuery
	jQuery = función (selector, contexto) {

		// El objeto jQuery es en realidad solo el constructor init 'mejorado'
		// Necesita init si se llama a jQuery (solo permita que se lance un error si no está incluido)
		devolver nuevo jQuery.fn.init (selector, contexto);
	};

jQuery.fn = jQuery.prototype = {

	// La versión actual de jQuery que se está utilizando
	jquery: versión,

	constructor: jQuery,

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	toArray: function () {
		return slice.call (esto);
	},

	// Obtener el elemento N en el conjunto de elementos coincidentes O
	// Obtener todo el conjunto de elementos coincidentes como una matriz limpia
	obtener: function (num) {

		// Devuelve todos los elementos en una matriz limpia
		if (num == null) {
			return slice.call (esto);
		}

		// Devuelve solo un elemento del conjunto
		devolver num <0? este [num + this.length]: este [num];
	},

	// Toma una matriz de elementos y empújala hacia la pila
	// (devolviendo el nuevo conjunto de elementos coincidentes)
	pushStack: function (elems) {

		// Construye un nuevo conjunto de elementos coincidentes de jQuery
		var ret = jQuery.merge (este.constructor (), elems);

		// Agrega el objeto antiguo a la pila (como referencia)
		ret.prevObject = esto;

		// Devuelve el conjunto de elementos recién formado
		return ret;
	},

	// Ejecuta una devolución de llamada para cada elemento del conjunto coincidente.
	cada uno: función (devolución de llamada) {
		return jQuery.each (esto, devolución de llamada);
	},

	mapa: función (devolución de llamada) {
		return this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	rebanada: función () {
		return this.pushStack (slice.apply (esto, argumentos));
	},

	primero: función () {
		devuelve this.eq (0);
	},

	último: function () {
		devuelve this.eq (-1);
	},

	par: función () {
		return this.pushStack (jQuery.grep (this, function (_elem, i) {
			return (i + 1)% 2;
		}));
	},

	Función impar() {
		return this.pushStack (jQuery.grep (this, function (_elem, i) {
			return i% 2;
		}));
	},

	eq: función (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		return this.pushStack (j> = 0 && j <len? [this [j]]: []);
	},

	end: function () {
		devuelve this.prevObject || this.constructor ();
	},

	// Sólo para uso interno.
	// Se comporta como un método de Array, no como un método de jQuery.
	empuja empuja,
	sort: arr.sort,
	empalme: empalme arr.
};

jQuery.extend = jQuery.fn.extend = function () {
	var opciones, nombre, src, copia, copyIsArray, clon,
		objetivo = argumentos [0] || {},
		i = 1,
		longitud = argumentos.longitud,
		profundo = falso;

	// Manejar una situación de copia profunda
	if (typeof target === "boolean") {
		profundo = objetivo;

		// Omite el booleano y el objetivo
		objetivo = argumentos [i] || {};
		i ++;
	}

	// Manejar el caso cuando el objetivo es una cadena o algo (posible en una copia profunda)
	if (typeof target! == "object" &&! isFunction (target)) {
		objetivo = {};
	}

	// Extiende jQuery si solo se pasa un argumento
	si (i === longitud) {
		objetivo = esto;
		yo--;
	}

	para (; i <longitud; i ++) {

		// Tratar solo con valores no nulos / indefinidos
		if ((opciones = argumentos [i])! = nulo) {

			// Extiende el objeto base
			para (nombre en opciones) {
				copiar = opciones [nombre];

				// Prevenir la contaminación de Object.prototype
				// Evita un bucle sin fin
				if (nombre === "__proto__" || destino === copiar) {
					Seguir;
				}

				// Recurrir si estamos fusionando objetos simples o matrices
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copia)))) {
					src = objetivo [nombre];

					// Asegúrate del tipo adecuado para el valor fuente
					if (copyIsArray &&! Array.isArray (src)) {
						clon = [];
					} else if (! copyIsArray &&! jQuery.isPlainObject (src)) {
						clon = {};
					} más {
						clon = src;
					}
					copyIsArray = falso;

					// Nunca mueva objetos originales, clónelos
					target [nombre] = jQuery.extend (deep, clone, copy);

				// No introduzcas valores indefinidos
				} else if (copy! == undefined) {
					destino [nombre] = copiar;
				}
			}
		}
	}

	// Devuelve el objeto modificado
	objetivo de retorno;
};

jQuery.extend ({

	// Único para cada copia de jQuery en la página
	expando: "jQuery" + (version + Math.random ()) .replace (/ \ D / g, ""),

	// Supongamos que jQuery está listo sin el módulo listo
	isReady: cierto,

	error: function (msg) {
		lanzar nuevo error (msg);
	},

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Detecta negativos obvios
		// Use toString en lugar de jQuery.type para capturar objetos del host
		if (! obj || toString.call (obj)! == "[object Object]") {
			falso retorno;
		}

		proto = getProto (obj);

		// Los objetos sin prototipo (por ejemplo, ʻObject.create (null) `) son simples
		if (! proto) {
			devuelve verdadero;
		}

		// Los objetos con prototipo son simples si fueron construidos por una función de objeto global
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		return typeof Ctor === "función" && fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject: function (obj) {
		var nombre;

		para (nombre en obj) {
			falso retorno;
		}
		devuelve verdadero;
	},

	// Evalúa un script en un contexto proporcionado; recae en el global
	// si no se especifica.
	globalEval: function (código, opciones, doc) {
		DOMEval (código, {nonce: options && options.nonce}, doc);
	},

	cada uno: función (obj, devolución de llamada) {
		var longitud, i = 0;

		if (isArrayLike (obj)) {
			length = obj.length;
			para (; i <longitud; i ++) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					romper;
				}
			}
		} más {
			for (i in obj) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					romper;
				}
			}
		}

		return obj;
	},

	// los resultados son solo para uso interno
	makeArray: function (arr, results) {
		var ret = resultados || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "cadena"?
					[arr]: arr
				);
			} más {
				push.call (ret, arr);
			}
		}

		return ret;
	},

	inArray: function (elem, arr, i) {
		return arr == null? -1: indexOf.call (arr, elem, i);
	},

	// Soporte: Android <= 4.0 solamente, solo PhantomJS 1
	// push.apply (_, arraylike) arroja un WebKit antiguo
	fusionar: función (primero, segundo) {
		var len = + second.length,
			j = 0,
			i = primera.longitud;

		para (; j <len; j ++) {
			primero [i ++] = segundo [j];
		}

		primera.longitud = i;

		regresar primero;
	},

	grep: function (elems, callback, invertir) {
		var callbackInverse,
			coincidencias = [],
			i = 0,
			length = elems.length,
			callbackExpect =! invertir;

		// Ir a través de la matriz, solo guardando los elementos
		// que pasan la función de validador
		para (; i <longitud; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				fósforos.push (elems [i]);
			}
		}

		devolver partidos;
	},

	// arg es solo para uso interno
	map: function (elems, callback, arg) {
		var longitud, valor,
			i = 0,
			ret = [];

		// Repasa la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		if (isArrayLike (elems)) {
			length = elems.length;
			para (; i <longitud; i ++) {
				valor = devolución de llamada (elems [i], i, arg);

				si (valor! = nulo) {
					ret.push (valor);
				}
			}

		// Revisa todas las claves del objeto,
		} más {
			para (yo en elems) {
				valor = devolución de llamada (elems [i], i, arg);

				si (valor! = nulo) {
					ret.push (valor);
				}
			}
		}

		// Aplanar cualquier arreglo anidado
		volver plano (ret);
	},

	// Un contador GUID global para objetos
	guid: 1,

	// jQuery.support no se usa en Core pero otros proyectos adjuntan su
	// propiedades para que exista.
	soporte soporte
});

if (tipo de símbolo === "función") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Rellenar el mapa class2type
jQuery.each ("Número booleano Cadena Función Array Fecha RegExp Objeto Símbolo de error" .split (""),
función (_i, nombre) {
	class2type ["[objeto" + nombre + "]"] = name.toLowerCase ();
});

function isArrayLike (obj) {

	// Soporte: solo iOS 8.2 real (no reproducible en el simulador)
	// Comprobación ʻin` utilizada para evitar el error JIT (gh-2145)
	// hasOwn no se usa aquí debido a falsos negativos
	// con respecto a la longitud de la lista de nodos en IE
	var length = !! obj && "length" en obj && obj.length,
		tipo = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		falso retorno;
	}

	tipo de retorno === "matriz" || longitud === 0 ||
		typeof length === "número" && longitud> 0 && (longitud - 1) en obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores
 * Publicado bajo la licencia MIT
 * https://js.foundation/
 *
 * Fecha: 2020-03-14
 * /
(función (ventana) {
var i,
	apoyo,
	Expr,
	getText,
	isXML,
	tokenizar
	compilar,
	Seleccione,
	outsidemostContext,
	sortInput,
	hasDuplicate,

	// Variables de documentos locales
	setDocument
	documento,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	partidos,
	contiene

	// Datos específicos de la instancia
	expando = "chisporroteo" + 1 * nueva fecha (),
	favoriteDoc = window.document,
	dirruns = 0,
	hecho = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	nonnativeSelectorCache = createCache (),
	sortOrder = function (a, b) {
		si (a === b) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Métodos de instancia
	hasOwn = ({}) .hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	empujar = arr.push,
	rebanada = arr. rebanada,

	// Usa un indexOf reducido ya que es más rápido que el nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function (lista, elem) {
		var i = 0,
			len = list.length;
		para (; i <len; i ++) {
			si (lista [i] === elem) {
				volver i;
			}
		}
		return -1;
	},

	booleanos = "comprobado | seleccionado | asíncrono | enfoque automático | reproducción automática | controles | aplazar | desactivado | oculto |" +
		"ismap | loop | multiple | open | readonly | required | scoped",

	// Expresiones regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	espacio en blanco = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?: \\\\ [\\ da-fA-F] {1,6}" + espacio en blanco +
		"? | \\\\ [^ \\ r \\ n \\ f] | [\\ w-] | [^ \ 0 - \\ x7f]) +",

	// Selectores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\ [" + espacio en blanco + "* (" + identificador + ") (?:" + espacio en blanco +

		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)" + espacio en blanco +

		// "Los valores de los atributos deben ser identificadores CSS [captura 5]
		// o cadenas [captura 3 o captura 4] "
		"* (?: '((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identificador + ")) |)" +
		espacio en blanco + "* \\]",

	pseudos = ":(" + identificador + ") (?: \\ ((" +

		// Para reducir el número de selectores que necesitan tokenizar en el preFilter, prefiera argumentos:
		// 1. citado (captura 3; captura 4 o captura 5)
		"('((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +

		// 2. simple (captura 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + atributos + ") *) |" +

		// 3. cualquier otra cosa (captura 2)
		". *" +
		") \\) |)",

	// Espacios en blanco iniciales y finales sin escape, capturando algunos caracteres que no son espacios en blanco que preceden a este último
	rwhitespace = new RegExp (espacio en blanco + "+", "g"),
	rtrim = new RegExp ("^" + espacio en blanco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" +
		espacio en blanco + "+ $", "g"),

	rcomma = new RegExp ("^" + espacio en blanco + "*," + espacio en blanco + "*"),
	rcombinators = new RegExp ("^" + espacio en blanco + "* ([> + ~] |" + espacio en blanco + ")" + espacio en blanco +
		"*"),
	rdescend = new RegExp (espacio en blanco + "|>"),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identificador + "$"),

	matchExpr = {
		"ID": nueva expresión regular ("^ # (" + identificador + ")"),
		"CLASE": nueva RegExp ("^ \\. (" + Identificador + ")"),
		"TAG": nueva expresión regular ("^ (" + identificador + "| [*])"),
		"ATTR": nueva RegExp ("^" + atributos),
		"PSEUDO": nueva expresión regular ("^" + pseudos),
		"NIÑO": nueva RegExp ("^ :( sólo | primero | último | enésimo | enésimo-último) - (niño | de tipo) (?: \\ (" +
			espacio en blanco + "* (par | impar | (([+ -] |) (\\ d *) n |)" + espacio en blanco + "* (?: ([+ -] |)" +
			espacio en blanco + "* (\\ d +) |))" + espacio en blanco + "* \\) |)", "i"),
		"bool": nueva expresión regular ("^ (?:" + booleanos + ") $", "i"),

		// Para usar en bibliotecas que implementan .is ()
		// Usamos esto para la coincidencia de POS en `select`
		"needContext": nueva RegExp ("^" + espacio en blanco +
			"* [> + ~] |: (par | impar | eq | gt | lt | nth | primero | último) (?: \\ (" + espacio en blanco +
			"* ((?: - \\ d)? \\ d *)" + espacio en blanco + "* \\) |) (? = [^ -] | $)", "i")
	},

	rhtml = / HTML $ / i,
	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [nativo \ w /,

	// Selectores de ID o TAG o CLASE fácilmente analizables / recuperables
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS escapa
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ [\\ da-fA-F] {1,6}" + espacio en blanco + "? | \\\\ ([^ \\ r \\ n \\ f])" , "g"),
	funescape = function (escape, nonHex) {
		var high = "0x" + escape.slice (1) - 0x10000;

		return nonHex?

			// Quita el prefijo de barra invertida de una secuencia de escape no hexadecimal
			nonHex:

			// Reemplazar una secuencia de escape hexadecimal con el punto de código Unicode codificado
			// Soporte: IE <= 11 +
			// Para valores fuera del plano multilingüe básico (BMP), construya manualmente un
			// pareja sustituta
			alto <0?
				String.fromCharCode (alto + 0x10000):
				String.fromCharCode (alto >> 10 | 0xD800, alto & 0x3FF | 0xDC00);
	},

	// serialización de cadena / identificador CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL se convierte en U + FFFD REPLACEMENT CARACTER
			si (ch === "\ 0") {
				devolver "\ uFFFD";
			}

			// Los caracteres de control y los números (dependiendo de la posición) se escapan como puntos de código
			return ch.slice (0, -1) + "\\" +
				ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Otros caracteres ASCII potencialmente especiales obtienen un escape con barra invertida
		return "\\" + ch;
	},

	// Usado para iframes
	// Ver setDocument ()
	// Eliminar el contenedor de la función provoca un "Permiso denegado"
	// error en IE
	unloadHandler = function () {
		setDocument ();
	},

	inDisabledFieldset = addCombinator (
		function (elem) {
			return elem.disabled === verdadero && elem.nodeName.toLowerCase () === "fieldset";
		},
		{dir: "parentNode", siguiente: "leyenda"}
	);

// Optimizar para push.apply (_, NodeList)
tratar {
	empujar.apply
		(arr = slice.call (favoriteDoc.childNodes)),
		preferidosDoc.childNodes
	);

	// Soporte: Android <4.0
	// Detecta push.apply fallido silenciosamente
	// eslint-disable-next-line no-unused-expresiones
	arr [preferenciaDoc.childNodes.length] .nodeType;
} captura (e) {
	push = {apply: arr.length?

		// Aprovechar el segmento si es posible
		function (target, els) {
			pushNative.apply (destino, corte.call (els));
		}:

		// Soporte: IE <9
		// De lo contrario, agregue directamente
		function (target, els) {
			var j = target.length,
				i = 0;

			// No puedo confiar en NodeList.length
			while ((objetivo [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

función Sizzle (selector, contexto, resultados, semilla) {
	var m, i, elem, nid, coincidencia, grupos, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType por defecto es 9, ya que el contexto por defecto es document
		nodeType = contexto? context.nodeType: 9;

	resultados = resultados || [];

	// Regrese antes de las llamadas con un selector o contexto no válido
	if (typeof selector! == "string" ||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		devolver resultados;
	}

	// Intente atajar las operaciones de búsqueda (a diferencia de los filtros) en documentos HTML
	si (! semilla) {
		setDocument (contexto);
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Si el selector es lo suficientemente simple, intente usar un método DOM "get * By *"
			// (excepto el contexto DocumentFragment, donde los métodos no existen)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// selector de ID
				si ((m = coincidir [1])) {

					// Contexto del documento
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Soporte: IE, Opera, Webkit
							// TODO: identificar versiones
							// getElementById puede hacer coincidir elementos por nombre en lugar de ID
							if (elem.id === m) {
								results.push (elem);
								devolver resultados;
							}
						} más {
							devolver resultados;
						}

					// Contexto del elemento
					} más {

						// Soporte: IE, Opera, Webkit
						// TODO: identificar versiones
						// getElementById puede hacer coincidir elementos por nombre en lugar de ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contiene (contexto, elem) &&
							elem.id === m) {

							results.push (elem);
							devolver resultados;
						}
					}

				// selector de tipo
				} más si (coincide con [2]) {
					push.apply (resultados, context.getElementsByTagName (selector));
					devolver resultados;

				// selector de clase
				} más si ((m = coincidir con [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (resultados, context.getElementsByClassName (m));
					devolver resultados;
				}
			}

			// Aprovecha querySelectorAll
			si (support.qsa &&
				! nonnativeSelectorCache [selector + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (selector)) &&

				// Soporte: solo IE 8
				// Excluir elementos de objeto
				(nodeType! == 1 || context.nodeName.toLowerCase ()! == "objeto")) {

				newSelector = selector;
				newContext = contexto;

				// qSA considera elementos fuera de una raíz de alcance al evaluar al niño o
				// combinadores descendientes, que no es lo que queremos.
				// En tales casos, solucionamos el comportamiento colocando el prefijo de cada selector en el
				// lista con un selector de ID que hace referencia al contexto del alcance.
				// La técnica debe usarse también cuando se usa un combinador principal
				// como tales selectores no son reconocidos por querySelectorAll.
				// Gracias a Andrew Dupont por esta técnica.
				si (nodeType === 1 &&
					(rdescend.test (selector) || rcombinators.test (selector))) {

					// Expandir contexto para selectores de hermanos
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;

					// Podemos usar: scope en lugar del truco de ID si el navegador
					// lo admite y si no cambiamos el contexto.
					if (newContext! == context ||! support.scope) {

						// Capture el ID de contexto, configurándolo primero si es necesario
						if ((nid = context.getAttribute ("id"))) {
							nid = nid.replace (rcssescape, fcssescape);
						} más {
							context.setAttribute ("id", (nid = expandir));
						}
					}

					// Prefijo cada selector en la lista
					grupos = tokenizar (selector);
					i = grupos.longitud;
					mientras yo-- ) {
						grupos [i] = (nid? "#" + nid: ": alcance") + "" +
							toSelector (grupos [i]);
					}
					newSelector = groups.join (",");
				}

				tratar {
					push.apply (resultados,
						newContext.querySelectorAll (nuevoSelector)
					);
					devolver resultados;
				} catch (qsaError) {
					nonnativeSelectorCache (selector, verdadero);
				} finalmente {
					if (nid === expandir) {
						context.removeAttribute ("id");
					}
				}
			}
		}
	}

	// Todos los otros
	return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semilla);
}

/ **
 * Cree cachés de valores-clave de tamaño limitado
 * @returns {función (cadena, objeto)} Devuelve los datos del objeto después de almacenarlos en sí mismo con
 * nombre de propiedad de la cadena (con sufijo de espacio) y (si la caché es mayor que Expr.cacheLength)
 * eliminar la entrada más antigua
 * /
function createCache () {
	var claves = [];

	función caché (clave, valor) {

		// Utilice (tecla + "") para evitar la colisión con las propiedades del prototipo nativo (consulte el número 157)
		if (keys.push (key + "")> Expr.cacheLength) {

			// Conserve solo las entradas más recientes
			eliminar caché [keys.shift ()];
		}
		return (caché [clave + ""] = valor);
	}
	retorno de caché;
}

/ **
 * Marcar una función para uso especial de Sizzle
 * @param {Función} fn La función para marcar
 * /
función markFunction (fn) {
	fn [expandir] = verdadero;
	return fn;
}

/ **
 * Soporte de pruebas usando un elemento
 * @param {Función} fn Pasó el elemento creado y devuelve un resultado booleano
 * /
función aseverar (fn) {
	var el = document.createElement ("conjunto de campos");

	tratar {
		volver !! fn (el);
	} captura (e) {
		falso retorno;
	} finalmente {

		// Eliminar de su padre por defecto
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}

		// liberar memoria en IE
		el = nulo;
	}
}

/ **
 * Agrega el mismo controlador para todos los atributos especificados
 * @param {String} attrs Lista de atributos separados por tuberías
 * @param {Function} handler El método que se aplicará
 * /
function addHandle (attrs, handler) {
	var arr = attrs.split ("|"),
		i = longitud de arr.;

	mientras yo-- ) {
		Expr.attrHandle [arr [i]] = controlador;
	}
}

/ **
 * Verifica el orden de los documentos de dos hermanos
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Devuelve menos de 0 si a precede a b, mayor que 0 si a sigue a b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex si está disponible en ambos nodos
	if (diff) {
		return diff;
	}

	// Comprueba si b sigue a
	si (cur) {
		while ((cur = cur.nextSibling)) {
			si (cur === b) {
				return -1;
			}
		}
	}

	devolver un? 1: -1;
}

/ **
 * Devuelve una función para usar en pseudos para tipos de entrada
 * @param {String} tipo
 * /
function createInputPseudo (type) {
	función de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		nombre de retorno === "entrada" && elem.type === tipo;
	};
}

/ **
 * Devuelve una función para usar en pseudos para botones
 * @param {String} tipo
 * /
function createButtonPseudo (type) {
	función de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		return (nombre === "entrada" || nombre === "botón") && elem.type === tipo;
	};
}

/ **
 * Devuelve una función para usar en pseudos para: habilitado /: deshabilitado
 * @param {Boolean} desactivado verdadero para: desactivado; falso para: habilitado
 * /
function createDisabledPseudo (deshabilitado) {

	// Conocido: falsos positivos deshabilitados: fieldset [deshabilitado]> leyenda: n-ésimo de tipo (n + 2): can-disable
	función de retorno (elem) {

		// Solo ciertos elementos pueden coincidir: habilitado o: deshabilitado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("formulario" en elem) {

			// Verifique la discapacidad heredada en elementos relevantes no discapacitados:
			// * enumera los elementos asociados al formulario en un conjunto de campos deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opción en un optgroup deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos estos elementos tienen una propiedad "forma".
			if (elem.parentNode && elem.disabled === false) {

				// Los elementos de opción se remiten a un optgroup padre si está presente
				if ("etiqueta" en elem) {
					if ("etiqueta" en elem.parentNode) {
						return elem.parentNode.disabled === desactivado;
					} más {
						return elem.disabled === desactivado;
					}
				}

				// Soporte: IE 6 - 11
				// Use la propiedad de acceso directo isDisabled para buscar antepasados ​​de conjuntos de campos deshabilitados
				return elem.isDisabled === desactivado ||

					// Donde no hay isDisabled, verifique manualmente
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
					inDisabledFieldset (elem) === desactivado;
			}

			return elem.disabled === desactivado;

		// Intenta eliminar los elementos que no se pueden desactivar antes de confiar en la propiedad desactivada.
		// Algunas víctimas quedan atrapadas en nuestra red (etiqueta, leyenda, menú, pista), pero no debería
		// incluso existen en ellos, y mucho menos tienen un valor booleano.
		} else if ("etiqueta" en elem) {
			return elem.disabled === desactivado;
		}

		// Los elementos restantes no están: habilitados ni: deshabilitados
		falso retorno;
	};
}

/ **
 * Devuelve una función para usar en pseudos para posicionales
 * @param {Función} fn
 * /
function createPositionalPseudo (fn) {
	return markFunction (función (argumento) {
		argumento = + argumento;
		return markFunction (función (semilla, coincidencias) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// Coincidir con elementos encontrados en los índices especificados
			mientras yo-- ) {
				if (semilla [(j = matchIndexes [i])]) {
					semilla [j] =! (coincide con [j] = semilla [j]);
				}
			}
		});
	});
}

/ **
 * Comprueba la validez de un nodo como contexto Sizzle
 * @param {Elemento | Objeto =} contexto
 * @returns {Elemento | Objeto | Booleano} El nodo de entrada si es aceptable; de ​​lo contrario, un valor falso
 * /
function testContext (context) {
	return context && typeof context.getElementsByTagName! == "undefined" && context;
}

// Exponer vars de soporte por conveniencia
soporte = Sizzle.support = {};

/ **
 * Detecta nodos XML
 * @param {Elemento | Objeto} elem Un elemento o un documento
 * @returns {Boolean} Verdadero si el elemento es un nodo XML que no es HTML
 * /
isXML = Sizzle.isXML = función (elem) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem) .documentElement;

	// Soporte: IE <= 8
	// Asume HTML cuando documentElement aún no existe, como iframes de carga dentro
	// https://bugs.jquery.com/ticket/4833
	return! rhtml.test (espacio de nombres || docElem && docElem.nodeName || "HTML");
};

/ **
 * Establece variables relacionadas con el documento una vez basadas en el documento actual
 * @param {Elemento | Objeto} [doc] Un elemento u objeto de documento para usar para configurar el documento
 * @returns {Object} Devuelve el documento actual
 * /
setDocument = Sizzle.setDocument = function (nodo) {
	var hasCompare, subWindow,
		doc = nodo? node.ownerDocument || nodo: favoriteDoc;

	// Regrese antes si el documento no es válido o ya está seleccionado
	// Soporte: IE 11+, Edge 17 - 18+
	// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if (doc == documento || doc.nodeType! == 9 ||! doc.documentElement) {
		documento de devolución;
	}

	// Actualizar variables globales
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (documento);

	// Soporte: IE 9 - 11+, Edge 12 - 18+
	// Acceder a documentos iframe después de descargar arroja errores de "permiso denegado" (jQuery # 13936)
	// Soporte: IE 11+, Edge 17 - 18+
	// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	si (preferidoDoc! = documento &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Soporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("descargar", unloadHandler, falso);

		// Soporte: IE 9 - 10 solamente
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	// Soporte: IE 8 - 11+, Edge 12 - 18+, Chrome <= 16 - 25 solamente, Firefox <= 3.6 - 31 solamente,
	// Solo Safari 4-5, Opera <= 11.6 - 12.x únicamente
	// IE / Edge y los navegadores más antiguos no admiten la pseudoclase: scope.
	// Soporte: Safari 6.0 solamente
	// Safari 6.0 admite: scope pero es un alias de: root allí.
	support.scope = assert (function (el) {
		docElem.appendChild (el) .appendChild (document.createElement ("div"));
		return typeof el.querySelectorAll! == "undefined" &&
			! el.querySelectorAll (": campo de alcance div") .length;
	});

	/ * Atributos
	-------------------------------------------------- -------------------- * /

	// Soporte: IE <8
	// Verifica que getAttribute realmente devuelve atributos y no propiedades
	// (excepto los booleanos IE8)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) por *
	-------------------------------------------------- -------------------- * /

	// Verifica si getElementsByTagName ("*") devuelve solo elementos
	support.getElementsByTagName = assert (function (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*") .length;
	});

	// Soporte: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Soporte: IE <10
	// Verifica si getElementById devuelve elementos por nombre
	// Los métodos getElementById rotos no recogen nombres establecidos mediante programación,
	// así que usa una prueba indirecta getElementsByName
	support.getById = assert (function (el) {
		docElem.appendChild (el) .id = expandir;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// ID filtrar y buscar
	if (support.getById) {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				volver elem? [elem]: [];
			}
		};
	} más {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				var nodo = tipo de elem.getAttributeNode! == "indefinido" &&
					elem.getAttributeNode ("id");
				return nodo && node.value === attrId;
			};
		};

		// Soporte: IE 6 - 7 solamente
		// getElementById no es confiable como atajo de búsqueda
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var nodo, yo, elems,
					elem = context.getElementById (id);

				si (elem) {

					// Verifica el atributo id
					nodo = elem.getAttributeNode ("id");
					if (nodo && node.value === id) {
						return [elem];
					}

					// Recurrir a getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						nodo = elem.getAttributeNode ("id");
						if (nodo && node.value === id) {
							return [elem];
						}
					}
				}

				regreso [];
			}
		};
	}

	// Etiqueta
	Expr.find ["TAG"] = support.getElementsByTagName?
		función (etiqueta, contexto) {
			if (typeof context.getElementsByTagName! == "undefined") {
				return context.getElementsByTagName (etiqueta);

			// Los nodos DocumentFragment no tienen gEBTN
			} else if (support.qsa) {
				return context.querySelectorAll (etiqueta);
			}
		}:

		función (etiqueta, contexto) {
			var elem,
				tmp = [],
				i = 0,

				// Por feliz coincidencia, también aparece un gEBTN (roto) en los nodos de DocumentFragment
				resultados = context.getElementsByTagName (etiqueta);

			// Filtrar posibles comentarios
			si (etiqueta === "*") {
				while ((elem = results [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				return tmp;
			}
			devolver resultados;
		};

	// Clase
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "undefined" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / MatchSelector
	-------------------------------------------------- -------------------- * /

	// Soporte QSA y MatchSelector

	// MatchSelector (: active) informa falso cuando es verdadero (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) informa falso cuando es verdadero (Chrome 21)
	// Permitimos esto debido a un error en IE8 / 9 que arroja un error
	// siempre que se accede a `document.activeElement` en un iframe
	// Entonces, permitimos que: focus pase por QSA todo el tiempo para evitar el error de IE
	// Ver https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {

		// Construir expresiones regulares QSA
		// Estrategia de regex adoptada por Diego Perini
		afirmar (función (el) {

			var input;

			// Seleccionar se establece en una cadena vacía a propósito
			// Esto es para probar el tratamiento de IE de no explícitamente
			// establecer un atributo de contenido booleano,
			// ya que su presencia debería ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </option> </select>";

			// Soporte: IE8, Opera 11-12.16
			// No se debe seleccionar nada cuando siguen cadenas vacías ^ = o $ = o * =
			// El atributo de prueba debe ser desconocido en Opera pero "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '']") .length) {
				rbuggyQSA.push ("[* ^ $] =" + espacio en blanco + "* (?: '' | \" \ ")");
			}

			// Soporte: IE8
			// Los atributos booleanos y el "valor" no se tratan correctamente
			if (! el.querySelectorAll ("[seleccionado]") .length) {
				rbuggyQSA.push ("\\ [" + espacio en blanco + "* (?: valor |" + booleanos + ")");
			}

			// Soporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ("~ =");
			}

			// Soporte: IE 11+, Edge 15 - 18+
			// IE 11 / Edge no encuentra elementos en una consulta `[name = '']` en algunos casos.
			// Agregar un atributo temporal al documento antes de que funcione la selección
			// en torno al problema.
			// Curiosamente, IE 10 y anteriores no parecen tener el problema.
			input = document.createElement ("entrada");
			input.setAttribute ("nombre", "");
			el.appendChild (entrada);
			if (! el.querySelectorAll ("[nombre = '']") .length) {
				rbuggyQSA.push ("\\ [" + espacio en blanco + "* nombre" + espacio en blanco + "* =" +
					espacio en blanco + "* (?: '' | \" \ ")");
			}

			// Webkit / Opera -: marcado debe devolver elementos de opción seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 arroja un error aquí y no verá pruebas posteriores
			if (! el.querySelectorAll (": comprobado") .length) {
				rbuggyQSA.push (": comprobado");
			}

			// Soporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector # id sibling-combinator selector` falla
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push (". #. + [+ ~]");
			}

			// Soporte: Firefox <= 3.6 - 5 solamente
			// Old Firefox no arroja un identificador mal escapado.
			el.querySelectorAll ("\\\ f");
			rbuggyQSA.push ("[\\ r \\ n \\ f]");
		});

		afirmar (función (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </select>";

			// Soporte: Aplicaciones nativas de Windows 8
			// Los atributos de tipo y nombre están restringidos durante la asignación .innerHTML
			var input = document.createElement ("entrada");
			input.setAttribute ("tipo", "oculto");
			el.appendChild (entrada) .setAttribute ("nombre", "D");

			// Soporte: IE8
			// Hacer cumplir la distinción entre mayúsculas y minúsculas del atributo de nombre
			if (el.querySelectorAll ("[nombre = d]") .length) {
				rbuggyQSA.push ("nombre" + espacio en blanco + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: habilitado /: elementos deshabilitados y ocultos (los elementos ocultos todavía están habilitados)
			// IE8 arroja un error aquí y no verá pruebas posteriores
			if (el.querySelectorAll (": habilitado") .length! == 2) {
				rbuggyQSA.push (": habilitado", ": deshabilitado");
			}

			// Soporte: IE9-11 +
			// IE's: el selector deshabilitado no recoge los hijos de los conjuntos de campos deshabilitados
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled") .length! == 2) {
				rbuggyQSA.push (": habilitado", ": deshabilitado");
			}

			// Soporte: Opera 10-11 solamente
			// Opera 10-11 no lanza pseudos inválidos post-coma
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((coincide con = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		afirmar (función (el) {

			// Comprueba si es posible hacer coincidencias
			// en un nodo desconectado (IE 9)
			support.disconnectedMatch = coincidencias.call (el, "*");

			// Esto debería fallar con una excepción
			// Gecko no se equivoca, devuelve falso en su lugar
			coincidencias.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contiene
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// El elemento contiene otro
	// A propósito auto-exclusivo
	// Como en, un elemento no se contiene a sí mismo
	contiene = hasCompare || rnative.test (docElem.contains)?
		función (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			devuelve un === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		función (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					si (b === a) {
						devuelve verdadero;
					}
				}
			}
			falso retorno;
		};

	/ * Clasificación
	-------------------------------------------------- -------------------- * /

	// Clasificación del orden de los documentos
	sortOrder = hasCompare?
	función (a, b) {

		// Marcar para eliminar duplicados
		si (a === b) {
			hasDuplicate = true;
			return 0;
		}

		// Ordenar según la existencia del método si solo una entrada tiene compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		si (comparar) {
			retorno comparar;
		}

		// Calcular la posición si ambas entradas pertenecen al mismo documento
		// Soporte: IE 11+, Edge 17 - 18+
		// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
		// dos documentos; las comparaciones superficiales funcionan.
		// eslint-disable-next-line eqeqeq
		comparar = (a.ownerDocument || a) == (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// De lo contrario, sabemos que están desconectados
			1;

		// Nodos desconectados
		si (comparar & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === compare)) {

			// Elija el primer elemento relacionado con nuestro documento preferido
			// Soporte: IE 11+, Edge 17 - 18+
			// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-disable-next-line eqeqeq
			if (un == documento || a.ownerDocument == preferidoDoc &&
				contiene (preferidoDoc, a)) {
				return -1;
			}

			// Soporte: IE 11+, Edge 17 - 18+
			// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-disable-next-line eqeqeq
			if (b == documento || b.ownerDocument == preferidoDoc &&
				contiene (preferidoDoc, b)) {
				return 1;
			}

			// Mantener el orden original
			return sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		volver comparar & 4? -1: 1;
	}:
	función (a, b) {

		// Salir temprano si los nodos son idénticos
		si (a === b) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Los nodos sin padres son documentos o están desconectados
		si (! aup ||! bup) {

			// Soporte: IE 11+, Edge 17 - 18+
			// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			/ * eslint-deshabilitar eqeqeq * /
			devolver un == documento? -1:
				b == documento? 1:
				/ * eslint-enable eqeqeq * /
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Si los nodos son hermanos, podemos hacer una comprobación rápida
		} más si (aup === bup) {
			return siblingCheck (a, b);
		}

		// De lo contrario, necesitamos listas completas de sus antepasados ​​para comparar
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Camina por el árbol buscando una discrepancia
		while (ap [i] === bp [i]) {
			i ++;
		}

		regreso yo?

			// Hacer una verificación de hermanos si los nodos tienen un ancestro común
			siblingCheck (ap [i], bp [i]):

			// De lo contrario, los nodos en nuestro documento se ordenan primero
			// Soporte: IE 11+, Edge 17 - 18+
			// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			/ * eslint-deshabilitar eqeqeq * /
			ap [i] == favoriteDoc? -1:
			bp [i] == favoriteDoc? 1:
			/ * eslint-enable eqeqeq * /
			0;
	};

	documento de devolución;
};

Sizzle.matches = function (expr, elementos) {
	return Sizzle (expr, null, null, elementos);
};

Sizzle.matchesSelector = function (elem, expr) {
	setDocument (elem);

	if (support.matchesSelector && documentIsHTML &&
		! nonnativeSelectorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		tratar {
			var ret = coincidencias.call (elem, expr);

			// MatchSelector de IE 9 devuelve falso en los nodos desconectados
			if (ret || support.disconnectedMatch ||

				// Además, se dice que los nodos desconectados están en un documento
				// fragmento en IE 9
				elem.document && elem.document.nodeType! == 11) {
				return ret;
			}
		} captura (e) {
			nonnativeSelectorCache (expr, true);
		}
	}

	return Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {

	// Establecer variables de documento si es necesario
	// Soporte: IE 11+, Edge 17 - 18+
	// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if ((context.ownerDocument || context)! = document) {
		setDocument (contexto);
	}
	return contiene (contexto, elem);
};

Sizzle.attr = function (elem, name) {

	// Establecer variables de documento si es necesario
	// Soporte: IE 11+, Edge 17 - 18+
	// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if ((elem.ownerDocument || elem)! = documento) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],

		// No se deje engañar por las propiedades de Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nombre,! documentIsHTML):
			indefinido

	return val! == undefined?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nombre):
			(val = elem.getAttributeNode (nombre)) && val.specified?
				val.value:
				nulo;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	lanzar nuevo Error ("Error de sintaxis, expresión no reconocida:" + msg);
};

/ **
 * Clasificación de documentos y eliminación de duplicados
 * @param {ArrayLike} resultados
 * /
Sizzle.uniqueSort = function (resultados) {
	var elem,
		duplicados = [],
		j = 0,
		i = 0;

	// A menos que * sepamos * que podemos detectar duplicados, asumimos su presencia
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = results [i ++])) {
			if (elem === resultados [i]) {
				j = duplicados.push (i);
			}
		}
		while (j--) {
			results.splice (duplica [j], 1);
		}
	}

	// Borrar entrada después de ordenar para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	sortInput = nulo;

	devolver resultados;
};

/ **
 * Función de utilidad para recuperar el valor de texto de una matriz de nodos DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	var nodo,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {

		// Si no hay nodeType, se espera que sea una matriz
		while ((nodo = elem [i ++])) {

			// No atravesar los nodos de comentarios
			ret + = getText (nodo);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {

		// Usa textContent para elementos
		// uso de innerText eliminado para la coherencia de las nuevas líneas (jQuery # 11153)
		if (typeof elem.textContent === "cadena") {
			return elem.textContent;
		} más {

			// Atraviesa a sus hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}

	// No incluya comentarios o nodos de instrucción de procesamiento

	return ret;
};

Expr = Sizzle.selectors = {

	// Puede ser ajustado por el usuario
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": {dir: "parentNode", primero: verdadero},
		"": {dir: "parentNode"},
		"+": {dir: "hermano anterior", primero: verdadero},
		"~": {dir: "hermano anterior"}
	},

	preFilter: {
		"ATTR": función (coincidencia) {
			coincidir [1] = coincidir [1] .replace (runescape, funescape);

			// Mover el valor dado para que coincida con [3] ya sea entre comillas o sin comillas
			partido [3] = (partido [3] || partido [4] ||
				partido [5] || "") .replace (runescape, funescape);

			si (coincide con [2] === "~ =") {
				coincidir [3] = "" + coincidir [3] + "";
			}

			return match.slice (0, 4);
		},

		"NIÑO": función (partido) {

			/ * coincidencias de matchExpr ["NIÑO"]
				1 tipo (solo | nth | ...)
				2 qué (hijo | de tipo)
				3 argumento (par | impar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 componente xn del argumento xn + y ([+ -]? \ D * n |)
				5 signo de componente xn
				6 x de componente xn
				7 signo de componente y
				8 años de componente y
			* /
			coincidir [1] = coincidir [1] .toLowerCase ();

			if (coincide con [1] .slice (0, 3) === "nth") {

				// nth- * requiere argumento
				if (! match [3]) {
					Sizzle.error (coincide con [0]);
				}

				// parámetros numéricos xey para Expr.filter.CHILD
				// recuerda que falso / verdadero se lanza respectivamente a 0/1
				coincidir [4] = + (coincidir [4]?
					coincide con [5] + (coincide con [6] || 1):
					2 * (coincide con [3] === "par" || coincide con [3] === "impar"));
				coincide con [5] = + ((coincide con [7] + coincide con [8]) || coincide con [3] === "impar");

				// otros tipos prohíben argumentos
			} más si (coincide con [3]) {
				Sizzle.error (coincide con [0]);
			}

			partido de vuelta;
		},

		"PSEUDO": función (coincidencia) {
			var exceso,
				unquoted =! match [6] && match [2];

			if (matchExpr ["CHILD"] .test (match [0])) {
				devolver nulo;
			}

			// Acepta los argumentos citados tal cual
			si (coincide con [3]) {
				partido [2] = partido [4] || partido [5] || "";

			// Elimina el exceso de caracteres de los argumentos sin comillas
			} else if (sin comillas && rpseudo.test (sin comillas) &&

				// Obtener el exceso de tokenize (recursivamente)
				(exceso = tokenizar (sin comillas, verdadero)) &&

				// avanzar al próximo paréntesis de cierre
				(exceso = unquoted.indexOf (")", unquoted.length - exceso) - unquoted.length)) {

				// el exceso es un índice negativo
				igualar [0] = igualar [0] .slice (0, exceso);
				match [2] = unquoted.slice (0, exceso);
			}

			// Devuelve solo las capturas que necesita el método de pseudo filtro (tipo y argumento)
			return match.slice (0, 3);
		}
	},

	filtro: {

		"TAG": función (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				function () {
					devuelve verdadero;
				}:
				function (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASE": función (className) {
			var patrón = classCache [className + ""];

			patrón de retorno ||
				(patrón = nueva expresión regular ("(^ |" + espacio en blanco +
					")" + className + "(" + espacio en blanco + "| $)")) && classCache (
						className, función (elem) {
							patrón de retorno.prueba (
								typeof elem.className === "cadena" && elem.className ||
								typeof elem.getAttribute! == "indefinido" &&
									elem.getAttribute ("clase") ||
								""
							);
				});
		},

		"ATTR": función (nombre, operador, verificación) {
			función de retorno (elem) {
				var result = Sizzle.attr (elem, name);

				si (resultado == nulo) {
					operador de retorno === "! =";
				}
				if (! operator) {
					devuelve verdadero;
				}

				resultado + = "";

				/ * eslint-disable max-len * /

				operador de retorno === "="? resultado === comprobar:
					operador === "! ="? resultado! == comprobar:
					operador === "^ ="? comprobar && result.indexOf (comprobar) === 0:
					operador === "* ="? comprobar && result.indexOf (comprobar)> -1:
					operador === "$ ="? comprobar && result.slice (-check.length) === comprobar:
					operador === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (comprobar)> -1:
					operador === "| ="? resultado === comprobar || result.slice (0, check.length + 1) === check + "-":
					falso;
				/ * eslint-enable max-len * /

			};
		},

		"NIÑO": función (tipo, qué, _argumento, primero, último) {
			var simple = type.slice (0, 3)! == "nth",
				forward = type.slice (-4)! == "last",
				ofType = what === "of-type";

			volver primero === 1 && último === 0?

				// Atajo para: nth - * (n)
				function (elem) {
					return !! elem.parentNode;
				}:

				función (elem, _context, xml) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple! == hacia adelante? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						nombre = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = falso;

					if (padre) {

						//: (primero | último | solo) - (hijo | de tipo)
						if (simple) {
							while (dir) {
								nodo = elem;
								while ((nodo = nodo [dir])) {
									si (deTipo?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) {

										falso retorno;
									}
								}

								// Dirección inversa para: solo- * (si aún no lo hemos hecho)
								start = dir = type === "only" &&! start && "nextSibling";
							}
							devuelve verdadero;
						}

						start = [forward? parent.firstChild: parent.lastChild];

						// no xml: nth-child (...) almacena datos de caché en `parent`
						if (reenviar && useCache) {

							// Busca ʻelem` de un índice previamente almacenado en caché

							// ... de una manera compatible con gzip
							nodo = padre;
							externalCache = nodo [expando] || (nodo [expando] = {});

							// Soporte: IE <9 solamente
							// Defiéndete contra attroperties clonadas (jQuery gh-1709)
							UniqueCache = ExternalCache [node.uniqueID] ||
								(ExternalCache [node.uniqueID] = {});

							cache = uniqueCache [tipo] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((nodo = ++ nodeIndex && nodo && nodo [dir] ||

								// Recurrir a buscar ʻelem` desde el principio
								(diff = nodeIndex = 0) || start.pop ())) {

								// Cuando se encuentra, almacena en caché los índices en `parent` y se rompe
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [tipo] = [dirruns, nodeIndex, diff];
									romper;
								}
							}

						} más {

							// Use el índice de elementos previamente almacenado en caché si está disponible
							if (useCache) {

								// ... de una manera compatible con gzip
								nodo = elem;
								externalCache = nodo [expando] || (nodo [expando] = {});

								// Soporte: IE <9 solamente
								// Defiéndete contra attroperties clonadas (jQuery gh-1709)
								UniqueCache = ExternalCache [node.uniqueID] ||
									(ExternalCache [node.uniqueID] = {});

								cache = uniqueCache [tipo] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// o: nth-last-child (...) o: nth (-last)? - of-type (...)
							si (diff === falso) {

								// Usa el mismo ciclo anterior para buscar ʻelem` desde el principio
								while ((nodo = ++ nodeIndex && nodo && nodo [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									si ((deTipo?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) &&
										++ diff) {

										// Guarda en caché el índice de cada elemento encontrado
										if (useCache) {
											externalCache = nodo [expando] ||
												(nodo [expando] = {});

											// Soporte: IE <9 solamente
											// Defiéndete contra attroperties clonadas (jQuery gh-1709)
											UniqueCache = ExternalCache [node.uniqueID] ||
												(ExternalCache [node.uniqueID] = {});

											UniqueCache [tipo] = [dirruns, diff];
										}

										si (nodo === elem) {
											romper;
										}
									}
								}
							}
						}

						// Incorporar el desplazamiento, luego verificar el tamaño del ciclo
						diff - = último;
						return diff === primero || (diff% first === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": función (pseudo, argumento) {

			// Los nombres de pseudo-clases no distinguen entre mayúsculas y minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar por distinción entre mayúsculas y minúsculas en caso de que se agreguen pseudos personalizados con letras mayúsculas
			// Recuerda que setFilters hereda de pseudos
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo no admitido:" + pseudo);

			// El usuario puede usar createPseudo para indicar que
			// se necesitan argumentos para crear la función de filtro
			// tal como lo hace Sizzle
			if (fn [expandir]) {
				return fn (argumento);
			}

			// Pero mantén el soporte para firmas antiguas
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argumento];
				return Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (función (semilla, coincidencias) {
						var idx,
							emparejado = fn (semilla, argumento),
							i = longitud coincidente;
						mientras yo-- ) {
							idx = indexOf (semilla, coincidente [i]);
							semilla [idx] =! (coincide con [idx] = coincidente [i]);
						}
					}):
					function (elem) {
						return fn (elem, 0, args);
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Pseudos potencialmente complejos
		"no": markFunction (función (selector) {

			// Recorta el selector pasado para compilar
			// para evitar tratar el inicio y el final
			// espacios como combinadores
			var input = [],
				resultados = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			return matcher [expando]?
				markFunction (función (semilla, coincidencias, _context, xml) {
					var elem,
						incomparable = coincidente (semilla, nulo, xml, []),
						i = longitud de semilla;

					// Coincide con elementos no igualados por `matcher`
					mientras yo-- ) {
						if ((elem = incomparable [i])) {
							semilla [i] =! (coincide con [i] = elem);
						}
					}
				}):
				función (elem, _context, xml) {
					entrada [0] = elem;
					comparador (entrada, nulo, xml, resultados);

					// No conserve el elemento (número 299)
					entrada [0] = nulo;
					return! results.pop ();
				};
		}),

		"tiene": markFunction (función (selector) {
			función de retorno (elem) {
				return Sizzle (selector, elem) .length> 0;
			};
		}),

		"contiene": markFunction (función (texto) {
			text = text.replace (runescape, funescape);
			función de retorno (elem) {
				return (elem.textContent || getText (elem)) .indexOf (texto)> -1;
			};
		}),

		// "Si un elemento está representado por un selector: lang ()
		// se basa únicamente en el valor de idioma del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C seguido inmediatamente por "-".
		// La comparación de C con el valor del idioma del elemento se realiza sin distinción entre mayúsculas y minúsculas.
		// El identificador C no tiene que ser un nombre de idioma válido ".
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {

			// el valor de idioma debe ser un identificador válido
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("idioma no admitido:" + idioma);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			función de retorno (elem) {
				var elemLang;
				hacer {
					si ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				falso retorno;
			};
		}),

		// Varios
		"objetivo": función (elem) {
			var hash = window.location && window.location.hash;
			devolver hash && hash.slice (1) === elem.id;
		},

		"raíz": función (elem) {
			return elem === docElem;
		},

		"foco": función (elem) {
			return elem === document.activeElement &&
				(! document.hasFocus || document.hasFocus ()) &&
				!! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// Propiedades booleanas
		"habilitado": createDisabledPseudo (falso),
		"deshabilitado": createDisabledPseudo (verdadero),

		"comprobado": función (elem) {

			// En CSS3,: check debe devolver tanto los elementos seleccionados como los seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) ||
				(nodeName === "opción" && !! elem.selected);
		},

		"seleccionado": función (elem) {

			// Acceder a esta propiedad hace que se seleccione por defecto
			// las opciones en Safari funcionan correctamente
			if (elem.parentNode) {
				// eslint-disable-next-line no-unused-expresiones
				elem.parentNode.selectedIndex;
			}

			return elem.selected === verdadero;
		},

		// Contenidos
		"vacío": función (elem) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: el elemento (1) o los nodos de contenido niegan el vacío (texto: 3; cdata: 4; referencia de la entidad: 5),
			// pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// nodeType <6 funciona porque los atributos (2) no aparecen como hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					falso retorno;
				}
			}
			devuelve verdadero;
		},

		"padre": función (elem) {
			return! Expr.pseudos ["vacío"] (elem);
		},

		// Elementos / tipos de entrada
		"encabezado": función (elem) {
			return rheader.test (elem.nodeName);
		},

		"entrada": función (elem) {
			return rinputs.test (elem.nodeName);
		},

		"botón": función (elem) {
			var name = elem.nodeName.toLowerCase ();
			nombre de retorno === "entrada" && elem.type === "botón" || nombre === "botón";
		},

		"texto": función (elem) {
			var attr;
			return elem.nodeName.toLowerCase () === "input" &&
				elem.type === "texto" &&

				// Soporte: IE <8
				// Aparecen nuevos valores de atributo HTML5 (p. Ej., "Búsqueda") con elem.type === "texto"
				((atributo = elem.getAttribute ("tipo")) == nulo ||
					attr.toLowerCase () === "texto");
		},

		// Posición en la colección
		"primero": createPositionalPseudo (function () {
			return [0];
		}),

		"último": createPositionalPseudo (function (_matchIndexes, length) {
			return [longitud - 1];
		}),

		"eq": createPositionalPseudo (function (_matchIndexes, length, argument) {
			return [argumento <0? argumento + longitud: argumento];
		}),

		"incluso": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"impar": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0?
				argumento + longitud:
				argumento> longitud?
					longitud :
					argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0? argumento + longitud: argumento;
			para (; ++ i <longitud;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Agregar botón / tipo de entrada pseudos
para (yo en {radio: verdadero, casilla de verificación: verdadero, archivo: verdadero, contraseña: verdadero, imagen: verdadero}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
para (yo en {enviar: verdadero, restablecer: verdadero}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API fácil para crear nuevos setFilters
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	var emparejado, coincidencia, tokens, tipo,
		soFar, grupos, preFiltros,
		cached = tokenCache [selector + ""];

	si (en caché) {
		return parseOnly? 0: cached.slice (0);
	}

	soFar = selector;
	grupos = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// Coma y primera ejecución
		if (! coincidió || (coincidencia = rcomma.exec (soFar))) {
			si (coincidencia) {

				// No consuma las comas finales como válidas
				soFar = soFar.slice (coincide con [0] .length) || hasta aquí;
			}
			grupos.push ((tokens = []));
		}

		emparejado = falso;

		// Combinadores
		if ((coincidencia = rcombinators.exec (soFar))) {
			emparejado = match.shift ();
			tokens.push ({
				valor: emparejado,

				// Lanza combinadores descendientes al espacio
				tipo: coincide con [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (coincidente.longitud);
		}

		// Filtros
		para (escriba Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(coincidencia = preFiltros [tipo] (coincidencia)))) {
				emparejado = match.shift ();
				tokens.push ({
					valor: emparejado,
					tipo: tipo,
					partidos: partido
				});
				soFar = soFar.slice (coincidente.longitud);
			}
		}

		si (! coincidió) {
			romper;
		}
	}

	// Devuelve la longitud del exceso no válido
	// si solo estamos analizando
	// De lo contrario, arroja un error o devuelve tokens
	return parseOnly ?
		soFar.length:
		hasta aquí ?
			Sizzle.error (selector):

			// Caché los tokens
			tokenCache (selector, grupos) .slice (0);
};

función toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		selector = "";
	para (; i <len; i ++) {
		selector + = tokens [i] .value;
	}
	selector de retorno;
}

función addCombinator (comparador, combinador, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		clave = saltar || dir,
		checkNonElements = base && key === "parentNode",
		doneName = hecho ++;

	volver combinator.primero?

		// Verificar contra el antepasado más cercano / elemento anterior
		función (elem, contexto, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, context, xml);
				}
			}
			falso retorno;
		}:

		// Verificar con todos los elementos antepasados ​​/ precedentes
		función (elem, contexto, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// No podemos establecer datos arbitrarios en nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			si (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							devuelve verdadero;
						}
					}
				}
			} más {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						externalCache = elem [expando] || (elem [expando] = {});

						// Soporte: IE <9 solamente
						// Defiéndete contra attroperties clonadas (jQuery gh-1709)
						caché único = caché externo [elem.uniqueID] ||
							(caché externo [elem.uniqueID] = {});

						if (omitir && omitir === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [clave]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Asignar a newCache para que los resultados se propaguen a los elementos anteriores
							return (newCache [2] = oldCache [2]);
						} más {

							// Reutiliza newcache para que los resultados se propaguen a los elementos anteriores
							UniqueCache [clave] = newCache;

							// Una coincidencia significa que hemos terminado; un error significa que tenemos que seguir controlando
							if ((newCache [2] = matcher (elem, context, xml))) {
								devuelve verdadero;
							}
						}
					}
				}
			}
			falso retorno;
		};
}

function elementMatcher (comparadores) {
	return matchers.length> 1?
		función (elem, contexto, xml) {
			var i = matchers.length;
			mientras yo-- ) {
				if (! matchers [i] (elem, context, xml)) {
					falso retorno;
				}
			}
			devuelve verdadero;
		}:
		emparejadores [0];
}

function multipleContexts (selector, contextos, resultados) {
	var i = 0,
		len = contexts.length;
	para (; i <len; i ++) {
		Sizzle (selector, contextos [i], resultados);
	}
	devolver resultados;
}

función condensar (incomparable, mapa, filtro, contexto, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = inigualable.longitud,
		mapeado = mapa! = nulo;

	para (; i <len; i ++) {
		if ((elem = incomparable [i])) {
			if (! filter || filter (elem, context, xml)) {
				newUnmatched.push (elem);
				if (mapeado) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

función setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (función (semilla, resultados, contexto, xml) {
		var temp, yo, elem,
			preMap = [],
			postMap = [],
			preexistente = resultados.longitud,

			// Obtener elementos iniciales de semilla o contexto
			elems = semilla || multipleContexts (
				selector || "*",
				context.nodeType? [contexto]: contexto,
				[]
			),

			// Prefiltro para obtener la entrada del comparador, conservando un mapa para la sincronización de los resultados de la semilla
			matcherIn = preFilter && (semilla ||! selector)?
				condensar (elems, preMap, preFilter, context, xml):
				elems,

			matcherOut = matcher?

				// Si tenemos un postFinder, o semilla filtrada, o postFilter no semilla o resultados preexistentes,
				postFinder || (semilla? preFiltro: preexistente || postFiltro)?

					// ... es necesario un procesamiento intermedio
					[]:

					// ... de lo contrario, use los resultados directamente
					resultados:
				matcherIn;

		// Encuentra coincidencias primarias
		si (comparador) {
			matcher (matcherIn, matcherOut, context, xml);
		}

		// Aplicar postFilter
		if (postFilter) {
			temp = condensar (matcherOut, postMap);
			postFilter (temp, [], context, xml);

			// Elimina la coincidencia de elementos defectuosos moviéndolos de nuevo a matcherIn
			i = temp.length;
			mientras yo-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		if (semilla) {
			if (postFinder || preFilter) {
				if (postFinder) {

					// Obtenga el matcherOut final condensando este intermedio en contextos postFinder
					temp = [];
					i = matcherOut.length;
					mientras yo-- ) {
						if ((elem = matcherOut [i])) {

							// Restaurar matcherIn ya que elem aún no es una coincidencia final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (nulo, (matcherOut = []), temp, xml);
				}

				// Mueve los elementos coincidentes de la semilla a los resultados para mantenerlos sincronizados
				i = matcherOut.length;
				mientras yo-- ) {
					si ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (semilla, elem): preMap [i])> -1) {

						semilla [temp] =! (resultados [temp] = elem);
					}
				}
			}

		// Agregar elementos a los resultados, a través de postFinder si está definido
		} más {
			matcherOut = condensar (
				matcherOut === resultados?
					matcherOut.splice (preexistente, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (nulo, resultados, matcherOut, xml);
			} más {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

function matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadRelative = Expr.relative [tokens [0] .type],
		implícitoRelativo = líderRelativo || Expr.relative [""],
		i = leadRelative? 1: 0,

		// El comparador fundamental asegura que los elementos sean accesibles desde contextos de nivel superior
		matchContext = addCombinator (función (elem) {
			return elem === checkContext;
		}, implícitoRelativo, verdadero),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implícitoRelativo, verdadero),
		matchers = [function (elem, context, xml) {
			var ret = (! LeadRelative && (xml || context! == outsidemostContext)) || (
				(checkContext = contexto) .nodeType?
					matchContext (elem, contexto, xml):
					matchAnyContext (elem, contexto, xml));

			// Evite colgarse del elemento (número 299)
			checkContext = null;
			return ret;
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} más {
			matcher = Expr.filter [tokens [i] .type] .apply (nulo, tokens [i] .matches);

			// Devuelve especial al ver un comparador posicional
			if (comparador [expando]) {

				// Encuentra el siguiente operador relativo (si lo hay) para un manejo adecuado
				j = ++ i;
				para (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						romper;
					}
				}
				return setMatcher (
					i> 1 && elementMatcher (comparadores),
					i> 1 && toSelector (

					// Si el token anterior era un combinador descendiente, inserte un elemento cualquiera implícito `*`
					tokens
						rebanada (0, i - 1)
						.concat ({valor: tokens [i - 2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					emparejador
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (igualador);
		}
	}

	return elementMatcher (comparadores);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = función (semilla, contexto, xml, resultados, más externo) {
			var elem, j, comparador,
				matchedCount = 0,
				i = "0",
				inigualable = semilla && [],
				setMatched = [],
				contextBackup = outermostContext,

				// Siempre debemos tener elementos semilla o contexto más externo
				elems = semilla || byElement && Expr.find ["TAG"] ("*", más externo),

				// Use dirruns enteros si este es el comparador más externo
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (más externo) {

				// Soporte: IE 11+, Edge 17 - 18+
				// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
				// dos documentos; las comparaciones superficiales funcionan.
				// eslint-disable-next-line eqeqeq
				externalmostContext = contexto == documento || contexto || más exterior;
			}

			// Agrega elementos pasando elementMatchers directamente a los resultados
			// Soporte: IE <9, Safari
			// Tolerar las propiedades de NodeList (IE: "length"; Safari: <number>) elementos coincidentes por id
			para (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;

					// Soporte: IE 11+, Edge 17 - 18+
					// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
					// dos documentos; las comparaciones superficiales funcionan.
					// eslint-disable-next-line eqeqeq
					if (! context && elem.ownerDocument! = document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, contexto || documento, xml)) {
							results.push (elem);
							romper;
						}
					}
					if (más externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Seguimiento de elementos no coincidentes para establecer filtros
				if (bySet) {

					// Habrán pasado por todos los emparejamientos posibles
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Alarga la matriz para cada elemento, coincidente o no
					if (semilla) {
						inigualable.push (elem);
					}
				}
			}

			// ʻi` es ahora el recuento de elementos visitados arriba, y lo agrega a `matchedCount`
			// hace que este último no sea negativo.
			matchedCount + = i;

			// Aplicar filtros de conjunto a elementos no coincidentes
			// NOTA: Esto se puede omitir si no hay elementos no coincidentes (es decir, `matchedCount`
			// es igual a ʻi`), a menos que no hayamos visitado _cualquier_ elementos en el ciclo anterior porque tenemos
			// sin coincidencias de elementos y sin semilla.
			// Incrementar una cadena inicial "0" ʻi` permite que ʻi` permanezca como una cadena solo en ese
			// caso, lo que dará como resultado un "00" `matchCount` que difiere de ʻi` pero también
			// numéricamente cero.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					comparador (inigualable, setMatched, context, xml);
				}

				if (semilla) {

					// Reintegrar las coincidencias de elementos para eliminar la necesidad de ordenar
					if (matchedCount> 0) {
						mientras yo-- ) {
							if (! (inigualable [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descartar los valores del marcador de posición del índice para obtener solo coincidencias reales
					setMatched = condensar (setMatched);
				}

				// Agregar coincidencias a los resultados
				push.apply (resultados, setMatched);

				// Las coincidencias de conjuntos sin semillas que tienen éxito en varios emparejadores exitosos estipulan la clasificación
				if (más externo &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Anular la manipulación de globales por comparadores anidados
			if (más externo) {
				dirruns = dirrunsUnique;
				externalmostContext = contextBackup;
			}

			regreso inigualable;
		};

	volver por Set?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (selector, match / * Internal Use Only * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [selector + ""];

	if (! caché) {

		// Genera una función de funciones recursivas que se pueden usar para verificar cada elemento
		if (! match) {
			coincidencia = tokenizar (selector);
		}
		i = coincidencia.longitud;
		mientras yo-- ) {
			cached = matcherFromTokens (coincide con [i]);
			if (en caché [expando]) {
				setMatchers.push (en caché);
			} más {
				elementMatchers.push (en caché);
			}
		}

		// Caché la función compilada
		cached = compilerCache (
			selector,
			matcherFromGroupMatchers (elementMatchers, setMatchers)
		);

		// Guardar selector y tokenización
		cached.selector = selector;
	}
	retorno en caché;
};

/ **
 * Una función de selección de bajo nivel que funciona con compilado de Sizzle
 * funciones de selector
 * @param {String | Function} selector Un selector o un precompilado
 * función de selector construida con Sizzle.compile
 * @param {Element} contexto
 * @param {Array} [resultados]
 * @param {Array} [semilla] Un conjunto de elementos para comparar
 * /
select = Sizzle.select = function (selector, contexto, resultados, semilla) {
	var i, tokens, token, tipo, buscar,
		compilado = tipo de selector === "función" && selector,
		coincidir =! semilla && tokenizar ((selector = compilado.selector || selector));

	resultados = resultados || [];

	// Intente minimizar las operaciones si solo hay un selector en la lista y no hay semilla
	// (el último de los cuales nos garantiza contexto)
	if (match.length === 1) {

		// Reducir el contexto si el selector compuesto principal es un ID
		tokens = coincidir [0] = coincidir [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]) .type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0]
				.replace (runescape, funescape), contexto) || []) [0];
			if (! context) {
				devolver resultados;

			// Los comparadores precompilados seguirán verificando la ascendencia, así que suba de nivel
			} else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Obtener un conjunto de semillas para la coincidencia de derecha a izquierda
		i = matchExpr ["needsContext"] .test (selector)? 0: tokens.length;
		mientras yo-- ) {
			token = tokens [i];

			// Abortar si golpeamos un combinador
			if (Expr.relative [(type = token.type)]) {
				romper;
			}
			if ((buscar = Expr.find [tipo])) {

				// Búsqueda, ampliando el contexto para los principales combinadores de hermanos
				si ((semilla = encontrar (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) ||
						contexto
				))) {

					// Si la semilla está vacía o no quedan tokens, podemos regresar antes
					tokens.splice (i, 1);
					selector = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (resultados, semilla);
						devolver resultados;
					}

					romper;
				}
			}
		}
	}

	// Compila y ejecuta una función de filtrado si no se proporciona una
	// Proporcione `match` para evitar la retoquenización si modificamos el selector de arriba
	(compilado || compilar (selector, emparejar)) (
		semilla,
		contexto,
		! documentIsHTML,
		resultados,
		! contexto || rsibling.test (selector) && testContext (context.parentNode) || contexto
	);
	devolver resultados;
};

// Asignaciones únicas

// Clasificar estabilidad
support.sortStable = expando.split ("") .sort (sortOrder) .join ("") === expandir;

// Soporte: Chrome 14-35 +
// Asume siempre duplicados si no se pasan a la función de comparación
support.detectDuplicates = !! hasDuplicate;

// Inicializar con el documento predeterminado
setDocument ();

// Soporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corregido en Chrome 27)
// Los nodos separados se siguen * de manera confusa * entre sí *
support.sortDetached = assert (function (el) {

	// Debería devolver 1, pero devuelve 4 (siguiente)
	return el.compareDocumentPosition (document.createElement ("conjunto de campos")) & 1;
});

// Soporte: IE <8
// Evita la "interpolación" de atributos / propiedades
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (function (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("tipo | href | altura | ancho", función (elem, nombre, isXML) {
		if (! isXML) {
			return elem.getAttribute (nombre, nombre.toLowerCase () === "tipo"? 1: 2);
		}
	});
}

// Soporte: IE <9
// Usa defaultValue en lugar de getAttribute ("valor")
if (! support.attributes ||! assert (function (el) {
	el.innerHTML = "<entrada />";
	el.firstChild.setAttribute ("valor", "");
	return el.firstChild.getAttribute ("valor") === "";
})) {
	addHandle ("valor", función (elem, _name, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Soporte: IE <9
// Usa getAttributeNode para buscar booleanos cuando getAttribute miente
if (! assert (function (el) {
	return el.getAttribute ("deshabilitado") == null;
})) {
	addHandle (booleanos, función (elem, nombre, isXML) {
		var val;
		if (! isXML) {
			return elem [nombre] === verdadero? name.toLowerCase ():
				(val = elem.getAttributeNode (nombre)) && val.specified?
					val.value:
					nulo;
		}
	});
}

volver Sizzle;

} )( ventana );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Obsoleto
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = función (elem, dir, hasta) {
	var coincidente = [],
		truncar = hasta! == indefinido;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncar && jQuery (elem) .is (hasta)) {
				romper;
			}
			emparejado.push (elem);
		}
	}
	retorno emparejado;
};


var hermanos = función (n, elem) {
	var emparejado = [];

	para (; n; n = n. Hermano siguiente) {
		if (n.nodeType === 1 && n! == elem) {
			emparejado.push (n);
		}
	}

	retorno emparejado;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, nombre) {

  return elem.nodeName && elem.nodeName.toLowerCase () === nombre.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implementar la misma funcionalidad para filtrar y no
función aventar (elementos, calificador, no) {
	if (isFunction (calificador)) {
		return jQuery.grep (elementos, función (elem, i) {
			return !! qualifier.call (elem, i, elem)! == not;
		});
	}

	// Elemento único
	if (qualifier.nodeType) {
		return jQuery.grep (elementos, función (elem) {
			return (elem === calificador)! == no;
		});
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if (typeof qualifier! == "string") {
		return jQuery.grep (elementos, función (elem) {
			return (indexOf.call (calificador, elem)> -1)! == no;
		});
	}

	// Filtrado directamente para selectores simples y complejos
	return jQuery.filter (calificador, elementos, no);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	si no ) {
		expr = ": no (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	return jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	encontrar: función (selector) {
		var i, ret,
			len = this.length,
			self = esto;

		if (typeof selector! == "string") {
			devuelve this.pushStack (jQuery (selector) .filter (function () {
				para (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						devuelve verdadero;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		para (i = 0; i <len; i ++) {
			jQuery.find (selector, self [i], ret);
		}

		return len> 1? jQuery.uniqueSort (ret): ret;
	},
	filtro: función (selector) {
		return this.pushStack (winnow (this, selector || [], false));
	},
	no: función (selector) {
		return this.pushStack (winnow (this, selector || [], true));
	},
	es: función (selector) {
		volver !! aventar
			esta,

			// Si se trata de un selector posicional / relativo, verifique la pertenencia al conjunto devuelto
			// entonces $ ("p: first"). is ("p: last") no devolverá verdadero para un documento con dos "p".
			typeof selector === "cadena" && rneedsContext.test (selector)?
				jQuery (selector):
				selector || [],
			falso
		).longitud;
	}
});


// Inicializar un objeto jQuery


// Una referencia central a la raíz jQuery (documento)
var rootjQuery,

	// Una forma sencilla de comprobar cadenas HTML
	// Priorice #id sobre <tag> para evitar XSS a través de location.hash (# 9521)
	// Reconocimiento estricto de HTML (# 11290: debe comenzar con <)
	// Atajo simple #id case para velocidad
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = función (selector, contexto, raíz) {
		var match, elem;

		// MANEJO: $ (""), $ (nulo), $ (indefinido), $ (falso)
		if (! selector) {
			devuelve esto;
		}

		// El método init () acepta un rootjQuery alternativo
		// para que la migración admita jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Manejar cadenas HTML
		if (typeof selector === "cadena") {
			if (selector [0] === "<" &&
				selector [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Suponga que las cadenas que comienzan y terminan con <> son HTML y omita la verificación de expresiones regulares
				coincidencia = [nulo, selector, nulo];

			} más {
				coincidencia = rquickExpr.exec (selector);
			}

			// Coincide con html o asegúrese de que no se especifique ningún contexto para #id
			si (coincide con && (coincide con [1] ||! contexto)) {

				// MANEJO: $ (html) -> $ (matriz)
				si (coincide con [1]) {
					context = instancia de contexto de jQuery? contexto [0]: contexto;

					// La opción para ejecutar scripts es verdadera para retrocompatibilidad
					// Deje que se lance el error intencionalmente si parseHTML no está presente
					jQuery.merge (esto, jQuery.parseHTML (
						coincidir [1],
						context && context.nodeType? context.ownerDocument || contexto: documento,
						cierto
					));

					// MANEJO: $ (html, props)
					if (rsingleTag.test (coincide con [1]) && jQuery.isPlainObject (contexto)) {
						para (coincidencia en contexto) {

							// Las propiedades del contexto se llaman como métodos si es posible
							if (isFunction (este [partido])) {
								este [partido] (contexto [partido]);

							// ... y de lo contrario establecer como atributos
							} más {
								this.attr (coincidencia, contexto [coincidencia]);
							}
						}
					}

					devuelve esto;

				// MANIJA: $ (# id)
				} más {
					elem = document.getElementById (coincide con [2]);

					si (elem) {

						// Inyecta el elemento directamente en el objeto jQuery
						esto [0] = elem;
						this.length = 1;
					}
					devuelve esto;
				}

			// MANEJO: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (contexto || raíz) .find (selector);

			// MANEJO: $ (expr, contexto)
			// (que es equivalente a: $ (contexto) .find (expr)
			} más {
				devuelve this.constructor (contexto) .find (selector);
			}

		// MANIJA: $ (DOMElement)
		} else if (selector.nodeType) {
			este [0] = selector;
			this.length = 1;
			devuelve esto;

		// MANIJA: $ (función)
		// Atajo para documento listo
		} else if (isFunction (selector)) {
			return root.ready! == undefined?
				root.ready (selector):

				// Ejecutar inmediatamente si listo no está presente
				selector (jQuery);
		}

		return jQuery.makeArray (selector, esto);
	};

// Dar a la función init el prototipo de jQuery para una instanciación posterior
init.prototype = jQuery.fn;

// Inicializar la referencia central
rootjQuery = jQuery (documento);


var rparentsprev = / ^ (?: padres | anterior (?: Hasta | Todos)) /,

	// Métodos garantizados para producir un conjunto único cuando se parte de un conjunto único
	GuaranteUnique = {
		niños: cierto,
		contenido: verdadero,
		siguiente: cierto,
		prev: cierto
	};

jQuery.fn.extend ({
	tiene: función (objetivo) {
		var objetivos = jQuery (objetivo, esto),
			l = objetivos.longitud;

		devuelve this.filter (function () {
			var i = 0;
			para (; i <l; i ++) {
				if (jQuery.contains (this, objetivos [i])) {
					devuelve verdadero;
				}
			}
		});
	},

	más cercano: función (selectores, contexto) {
		var cur,
			i = 0,
			l = esta.longitud,
			coincidente = [],
			objetivos = tipo de selectores! == "cadena" && jQuery (selectores);

		// Los selectores posicionales nunca coinciden, ya que no hay contexto _selection_
		if (! rneedsContext.test (selectores)) {
			para (; i <l; i ++) {
				para (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// Omitir siempre fragmentos de documentos
					if (cur.nodeType <11 && (objetivos?
						target.index (cur)> -1:

						// No pases elementos no a Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectores))) {

						emparejado.push (cur);
						romper;
					}
				}
			}
		}

		return this.pushStack (coincidente.longitud> 1? jQuery.uniqueSort (coincidente): coincidente);
	},

	// Determinar la posición de un elemento dentro del conjunto
	índice: función (elem) {

		// Sin argumento, índice de retorno en padre
		si (! elem) {
			return (este [0] && este [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Índice en selector
		if (typeof elem === "cadena") {
			return indexOf.call (jQuery (elem), this [0]);
		}

		// Localiza la posición del elemento deseado
		return indexOf.call (esto,

			// Si recibe un objeto jQuery, se usa el primer elemento
			elem.jquery? elem [0]: elem
		);
	},

	agregar: función (selector, contexto) {
		devuelve this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (selector, contexto))
			)
		);
	},

	addBack: function (selector) {
		devolver this.add (selector == null?
			this.prevObject: this.prevObject.filter (selector)
		);
	}
});

función hermano (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	return cur;
}

jQuery.each ({
	padre: función (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? padre: nulo;
	},
	padres: función (elem) {
		return dir (elem, "parentNode");
	},
	padresHasta: función (elem, _i, hasta) {
		return dir (elem, "parentNode", hasta);
	},
	siguiente: función (elem) {
		return hermano (elem, "nextSibling");
	},
	prev: function (elem) {
		return hermano (elem, "hermano anterior");
	},
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		return dir (elem, "hermano anterior");
	},
	nextUntil: function (elem, _i, until) {
		return dir (elem, "nextSibling", hasta);
	},
	prevUntil: function (elem, _i, until) {
		return dir (elem, "hermano anterior", hasta);
	},
	hermanos: función (elem) {
		devolver hermanos ((elem.parentNode || {}) .firstChild, elem);
	},
	hijos: función (elem) {
		hermanos de retorno (elem.firstChild);
	},
	contenido: function (elem) {
		if (elem.contentDocument! = null &&

			// Soporte: IE 11+
			// <object> elementos sin atributo `data` tienen un objeto
			// `contentDocument` con un prototipo` null`.
			getProto (elem.contentDocument)) {

			return elem.contentDocument;
		}

		// Soporte: solo IE 9-11, solo iOS 7, navegador Android <= 4.3 solo
		// Trate el elemento de la plantilla como uno normal en los navegadores que
		// no lo soportas.
		if (nodeName (elem, "plantilla")) {
			elem = elem.content || elem;
		}

		return jQuery.merge ([], elem.childNodes);
	}
}, función (nombre, fn) {
	jQuery.fn [nombre] = función (hasta, selector) {
		var emparejado = jQuery.map (esto, fn, hasta);

		if (name.slice (-5)! == "Hasta") {
			selector = hasta;
		}

		if (selector && typeof selector === "cadena") {
			emparejado = jQuery.filter (selector, emparejado);
		}

		if (this.length> 1) {

			// Eliminar duplicados
			if (! GuaranteUnique [nombre]) {
				jQuery.uniqueSort (coincidente);
			}

			// Orden inverso para padres * y prev-derivados
			if (rparentsprev.test (nombre)) {
				emparejado.reverse ();
			}
		}

		return this.pushStack (coincidente);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Convertir opciones con formato de cadena en opciones con formato de objeto
function createOptions (opciones) {
	var object = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		objeto [bandera] = verdadero;
	});
	devolver objeto;
}

/ *
 * Cree una lista de devolución de llamada utilizando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiarán cómo
 * la lista de devolución de llamada se comporta o un objeto de opción más tradicional
 *
 * De forma predeterminada, una lista de devolución de llamada actuará como una lista de devolución de llamada de evento y puede
 * "disparado" varias veces.
 *
 * Posibles opciones:
 *
 * una vez: asegurará que la lista de devolución de llamada solo se pueda activar una vez (como un aplazado)
 *
 * memoria: realizará un seguimiento de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * después de que la lista se haya disparado de inmediato con la última "memorizada"
 * valores (como un diferido)
 *
 * único: asegurará que una devolución de llamada solo se pueda agregar una vez (no hay duplicados en la lista)
 *
 * stopOnFalse: interrumpe las llamadas cuando una devolución de llamada devuelve falso
 *
 * /
jQuery.Callbacks = function (opciones) {

	// Convierta las opciones de formato de cadena a formato de objeto si es necesario
	// (primero revisamos el caché)
	opciones = tipo de opciones === "cadena"?
		createOptions (opciones):
		jQuery.extend ({}, opciones);

	var // Marcar para saber si la lista se está activando actualmente
		disparo,

		// Último valor de disparo para listas no olvidables
		memoria,

		// Marcar para saber si la lista ya se disparó
		despedido,

		// Bandera para evitar disparos
		bloqueado

		// Lista de devolución de llamada real
		lista = [],

		// Cola de datos de ejecución para listas repetibles
		cola = [],

		// Índice de devolución de llamada que se activa actualmente (modificado por agregar / eliminar según sea necesario)
		firingIndex = -1,

		// Devolver llamadas
		fuego = función () {

			// Hacer cumplir el disparo único
			bloqueado = bloqueado || options.once;

			// Ejecuta devoluciones de llamada para todas las ejecuciones pendientes,
			// respetar las anulaciones de firingIndex y los cambios de tiempo de ejecución
			disparado = disparando = verdadero;
			para (; queue.length; firingIndex = -1) {
				memoria = queue.shift ();
				while (++ firingIndex <list.length) {

					// Ejecute la devolución de llamada y verifique la terminación anticipada
					if (list [firingIndex] .apply (memoria [0], memoria [1]) === falso &&
						options.stopOnFalse) {

						// Salta al final y olvida los datos para que .add no se vuelva a disparar
						firingIndex = list.length;
						memoria = falso;
					}
				}
			}

			// Olvida los datos si hemos terminado con ellos
			if (! options.memory) {
				memoria = falso;
			}

			disparo = falso;

			// Limpia si hemos terminado de disparar para siempre
			si (bloqueado) {

				// Mantener una lista vacía si tenemos datos para futuras llamadas de adición
				si (memoria) {
					lista = [];

				// De lo contrario, este objeto se gasta
				} más {
					lista = "";
				}
			}
		},

		// Objeto de devolución de llamada real
		self = {

			// Agrega una devolución de llamada o una colección de devoluciones de llamada a la lista
			agregar: función () {
				if (lista) {

					// Si tenemos memoria de una ejecución pasada, deberíamos disparar después de agregar
					if (memoria &&! disparando) {
						firingIndex = list.length - 1;
						queue.push (memoria);
					}

					(función agregar (args) {
						jQuery.each (argumentos, función (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "cadena") {

								// Inspeccionar de forma recursiva
								agregar (arg);
							}
						});
					}) (argumentos);

					if (memoria &&! disparando) {
						fuego();
					}
				}
				devuelve esto;
			},

			// Eliminar una devolución de llamada de la lista
			eliminar: función () {
				jQuery.each (argumentos, función (_, arg) {
					var index;
					while ((índice = jQuery.inArray (arg, lista, índice))> -1) {
						list.splice (índice, 1);

						// Manejar índices de disparo
						if (índice <= firingIndex) {
							firingIndex--;
						}
					}
				});
				devuelve esto;
			},

			// Comprueba si una devolución de llamada determinada está en la lista.
			// Si no se proporciona ningún argumento, devuelve si la lista tiene devoluciones de llamada adjuntas.
			tiene: función (fn) {
				volver fn?
					jQuery.inArray (fn, lista)> -1:
					list.length> 0;
			},

			// Elimina todas las devoluciones de llamada de la lista
			vacío: función () {
				if (lista) {
					lista = [];
				}
				devuelve esto;
			},

			// Deshabilitar .fire y .add
			// Abortar cualquier ejecución actual / pendiente
			// Borrar todas las devoluciones de llamada y valores
			inhabilitar: función () {
				bloqueado = cola = [];
				lista = memoria = "";
				devuelve esto;
			},
			inhabilitado: función () {
				volver! lista;
			},

			// Deshabilitar .fire
			// También deshabilitar .add a menos que tengamos memoria (ya que no tendría ningún efecto)
			// Abortar las ejecuciones pendientes
			bloqueo: función () {
				bloqueado = cola = [];
				if (! memory &&! disparando) {
					lista = memoria = "";
				}
				devuelve esto;
			},
			bloqueado: función () {
				volver !! bloqueado;
			},

			// Llamar a todas las devoluciones de llamada con el contexto y los argumentos dados
			fireWith: function (context, args) {
				si (! bloqueado) {
					argumentos = argumentos || [];
					args = [contexto, args.slice? args.slice (): args];
					queue.push (argumentos);
					si (! disparando) {
						fuego();
					}
				}
				devuelve esto;
			},

			// Llamar a todas las devoluciones de llamada con los argumentos dados
			fuego: función () {
				self.fireWith (esto, argumentos);
				devuelve esto;
			},

			// Para saber si las devoluciones de llamada ya se han llamado al menos una vez
			despedido: function () {
				volver !! despedido;
			}
		};

	volver a sí mismo;
};


función Identidad (v) {
	return v;
}
función Thrower (ex) {
	tirar ex;
}

function adoptValue (valor, resolver, rechazar, noValue) {
	método var;

	tratar {

		// Verifique primero el aspecto de la promesa para privilegiar el comportamiento sincrónico
		if (valor && esFunción ((método = valor.promesa))) {
			method.call (valor) .done (resolver) .fail (rechazar);

		// Otras thenables
		} else if (value && isFunction ((method = value.then))) {
			method.call (valorar, resolver, rechazar);

		// Otros non-thenables
		} más {

			// Controla los argumentos de `resolve` dejando que Array # slice convierta el booleano` noValue` en un entero:
			// * falso: [valor] .slice (0) => resolver (valor)
			// * verdadero: [valor] .slice (1) => resolver ()
			resolve.apply (undefined, [value] .slice (noValue));
		}

	// Para Promesas / A +, convierta las excepciones en rechazos
	// Dado que jQuery.when no desenvuelve las posibilidades, podemos omitir las comprobaciones adicionales que aparecen en
	// Diferido # luego para suprimir condicionalmente el rechazo.
	} captura (valor) {

		// Soporte: solo Android 4.0
		// Funciones de modo estricto invocadas sin .call / .apply obtienen contexto de objeto global
		rechazar.aplicar (indefinido, [valor]);
	}
}

jQuery.extend ({

	Diferido: función (func) {
		var tuplas = [

				// acción, agregar escucha, devoluciones de llamada,
				// ... luego manejadores, índice de argumento, [estado final]
				["notificar", "progreso", jQuery.Callbacks ("memoria"),
					jQuery.Callbacks ("memoria"), 2],
				["resolver", "hecho", jQuery.Callbacks ("memoria una vez"),
					jQuery.Callbacks ("una vez memoria"), 0, "resuelto"],
				["rechazar", "fallar", jQuery.Callbacks ("memoria una vez"),
					jQuery.Callbacks ("una vez memoria"), 1, "rechazado"]
			],
			estado = "pendiente",
			promesa = {
				función estatal() {
					estado de retorno;
				},
				siempre: función () {
					diferido.done (argumentos) .fail (argumentos);
					devuelve esto;
				},
				"captura": función (fn) {
					devolver promesa, entonces (nulo, fn);
				},

				// Mantener la tubería para retrocompatibilidad
				pipe: function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = argumentos;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (tuplas, función (_i, tupla) {

							// Asignar tuplas (progreso, hecho, error) a argumentos (hecho, error, progreso)
							var fn = isFunction (fns [tupla [4]]) && fns [tupla [4]];

							// deferred.progress (function () {enlazar a newDefer o newDefer.notify})
							// diferido.done (función () {enlazar a newDefer o newDefer.resolve})
							// deferred.fail (function () {enlazar con newDefer o newDefer.reject})
							diferido [tupla [1]] (función () {
								var devuelto = fn && fn.apply (esto, argumentos);
								if (devuelto && isFunction (devuelto.promise)) {
									devuelto.promise ()
										.progreso (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} más {
									newDefer [tupla [0] + "Con"] (
										esta,
										fn? [devuelto]: argumentos
									);
								}
							});
						});
						fns = nulo;
					}) .promise ();
				},
				luego: función (onFuldered, onRejected, onProgress) {
					var maxDepth = 0;
					función resolver (profundidad, diferido, controlador, especial) {
						función de retorno () {
							var that = this,
								args = argumentos,
								mightThrow = function () {
									var regresó, entonces;

									// Soporte: Promesas / A + sección 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorar los intentos de doble resolución
									if (profundidad <maxDepth) {
										regreso;
									}

									devuelto = manejador.apply (eso, argumentos);

									// Soporte: Promesas / A + sección 2.3.1
									// https://promisesaplus.com/#point-48
									if (devuelto === deferred.promise ()) {
										lanzar nuevo TypeError ("Auto-resolución Thenable");
									}

									// Soporte: Promesas / A + secciones 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recuperar `entonces` solo una vez
									luego = devuelto &&

										// Soporte: Promesas / A + sección 2.3.4
										// https://promisesaplus.com/#point-64
										// Verifique solo objetos y funciones para determinar la posibilidad
										(typeof devuelto === "objeto" ||
											typeof devuelto === "función") &&
										regresó.entonces;

									// Manejar un thenable devuelto
									if (isFunction (entonces)) {

										// Procesadores especiales (notificar) solo espere la resolución
										if (especial) {
											luego llame(
												regresó
												resolver (maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, lanzador, especial)
											);

										// Los procesadores normales (resolver) también se conectan al progreso
										} más {

											// ... e ignore los valores de resolución más antiguos
											maxDepth ++;

											luego llame(
												regresó
												resolver (maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, lanzador, especial),
												resolver (maxDepth, diferido, identidad,
													diferido.notifyWith)
											);
										}

									// Maneja todos los demás valores devueltos
									} más {

										// Solo los manejadores sustitutos transmiten contexto
										// y varios valores (comportamiento sin especificaciones)
										if (controlador! == Identidad) {
											eso = indefinido;
											args = [devuelto];
										}

										// Procesar el (los) valor (es)
										// El proceso predeterminado es resolver
										(especial || diferido.resolveWith) (eso, argumentos);
									}
								},

								// Solo los procesadores normales (resuelven) detectan y rechazan excepciones
								proceso = especial?
									mightThrow:
									function () {
										tratar {
											mightThrow ();
										} captura (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Soporte: Promesas / A + sección 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar las excepciones posteriores a la resolución
											if (profundidad + 1> = maxDepth) {

												// Solo los manejadores sustitutos transmiten contexto
												// y varios valores (comportamiento sin especificaciones)
												if (manejador! == Lanzador) {
													eso = indefinido;
													args = [e];
												}

												deferred.rejectWith (eso, argumentos);
											}
										}
									};

							// Soporte: Promesas / A + sección 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Resolver las promesas inmediatamente para esquivar el falso rechazo de
							// errores posteriores
							if (profundidad) {
								proceso();
							} más {

								// Llamar a un gancho opcional para registrar la pila, en caso de excepción
								// ya que de lo contrario se pierde cuando la ejecución se vuelve asincrónica
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (proceso);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuplas [0] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onProgress)?
									en progreso :
									Identidad,
								newDefer.notifyWith
							)
						);

						// manipuladores_cumplidos.add (...)
						tuplas [1] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onFuldered)?
									en Cumplido:
									Identidad
							)
						);

						// manipuladores_rechazados.add (...)
						tuplas [2] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onRejected)?
									onRejected:
									Lanzador
							)
						);
					}) .promise ();
				},

				// Obtenga una promesa para este aplazado
				// Si se proporciona obj, el aspecto de promesa se agrega al objeto
				promesa: función (obj) {
					return obj! = null? jQuery.extend (obj, promesa): promesa;
				}
			},
			diferido = {};

		// Agregar métodos específicos de la lista
		jQuery.each (tuplas, función (i, tupla) {
			var list = tuple [2],
				stateString = tupla [5];

			// promesa.progreso = lista.add
			// promise.done = list.add
			// promise.fail = list.add
			promesa [tupla [1]] = lista.add;

			// Manejar estado
			if (stateString) {
				list.add (
					function () {

						// estado = "resuelto" (es decir, cumplido)
						// estado = "rechazado"
						state = stateString;
					},

					// rechazadas_callbacks.disable
					// devoluciones_de_llamadas.disable
					tuplas [3 - i] [2] .disable,

					// manipuladores_rechazados.disable
					// manipuladores_cumplidos.disable
					tuplas [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuplas [0] [2] .lock,

					// progress_handlers.lock
					tuplas [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// manipuladores_cumplidos.fire
			// manipuladores_rechazados.fire
			list.add (tupla [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			diferido [tupla [0]] = función () {
				diferido [tupla [0] + "Con"] (esto === diferido? indefinido: esto, argumentos);
				devuelve esto;
			};

			// diferido.notifyWith = list.fireWith
			// diferido.resolveWith = list.fireWith
			// diferido.rejectWith = list.fireWith
			diferido [tupla [0] + "Con"] = list.fireWith;
		});

		// Haz lo diferido una promesa
		promesa.promise (diferido);

		// Llamar a la función dada si existe
		if (func) {
			func.call (diferido, diferido);
		}

		// ¡Todo listo!
		retorno diferido;
	},

	// Ayudante diferido
	cuando: function (singleValue) {
		var

			// recuento de subordinados incompletos
			restante = argumentos.longitud,

			// recuento de argumentos sin procesar
			i = restante,

			// datos de cumplimiento subordinados
			resolveContexts = Matriz (i),
			resolveValues ​​= slice.call (argumentos),

			// el maestro diferido
			maestro = jQuery.Deferred (),

			// fábrica de devolución de llamada subordinada
			updateFunc = function (i) {
				función de retorno (valor) {
					resolveContexts [i] = esto;
					resolveValues ​​[i] = argumentos.longitud> 1? slice.call (argumentos): valor;
					si (! (--restante)) {
						master.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// Se adoptan argumentos simples y vacíos como Promise.resolve
		si (restante <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!restante );

			// Usa .then () para desenvolver las thenables secundarias (cf. gh-3000)
			if (master.state () === "pendiente" ||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i]. then)) {

				volver maestro, luego ();
			}
		}

		// Se agregan múltiples argumentos como Promise.all elementos de la matriz
		mientras yo-- ) {
			adoptValue (resolveValues ​​[i], updateFunc (i), master.reject);
		}

		return master.promise ();
	}
});


// Estos suelen indicar un error del programador durante el desarrollo,
// advertir sobre ellos lo antes posible en lugar de tragarlos por defecto.
var rerrorNames = / ^ (Eval | Interno | Rango | Referencia | Sintaxis | Tipo | URI) Error $ /;

jQuery.Deferred.exceptionHook = function (error, stack) {

	// Soporte: IE 8 - 9 solamente
	// La consola existe cuando las herramientas de desarrollo están abiertas, lo que puede suceder en cualquier momento
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ("jQuery.Excepción diferida:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		lanzar error;
	});
};




// El diferido usado en DOM listo
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	readyList
		.entonces (fn)

		// Envuelve jQuery.readyException en una función para que la búsqueda
		// ocurre en el momento del manejo de errores en lugar de la devolución de llamada
		// registro.
		.catch (función (error) {
			jQuery.readyException (error);
		});

	devuelve esto;
};

jQuery.extend ({

	// ¿El DOM está listo para usarse? Establecer en verdadero una vez que ocurra.
	isReady: falso,

	// Un contador para rastrear cuántos elementos esperar antes
	// el evento listo se dispara. Ver # 6781
	readyWait: 1,

	// Manejar cuando el DOM esté listo
	listo: función (esperar) {

		// Abortar si hay retenciones pendientes o ya estamos listos
		if (esperar === cierto? --jQuery.readyWait: jQuery.isReady) {
			regreso;
		}

		// Recuerda que el DOM está listo
		jQuery.isReady = verdadero;

		// Si se dispara un evento DOM Ready normal, disminuya y espere si es necesario
		if (espera! == verdadero && --jQuery.readyWait> 0) {
			regreso;
		}

		// Si hay funciones vinculadas, ejecutar
		readyList.resolveWith (documento, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// El manejador de eventos listo y el método de autolimpieza
función completada () {
	document.removeEventListener ("DOMContentLoaded", completado);
	window.removeEventListener ("cargar", completado);
	jQuery.ready ();
}

// Detecta los casos en los que se llama a $ (document) .ready ()
// después de que el evento del navegador ya haya ocurrido.
// Soporte: IE <= 9 - 10 solamente
// El IE más antiguo a veces indica "interactivo" demasiado pronto
if (document.readyState === "complete" ||
	(document.readyState! == "loading" &&! document.documentElement.doScroll)) {

	// Manéjelo de forma asincrónica para permitir que los scripts tengan la oportunidad de retrasarse
	window.setTimeout (jQuery.ready);

} más {

	// Usa la práctica devolución de llamada de eventos
	document.addEventListener ("DOMContentLoaded", completado);

	// Una alternativa a window.onload, que siempre funcionará
	window.addEventListener ("cargar", completado);
}




// Método multifuncional para obtener y establecer valores de una colección
// El valor / s se puede ejecutar opcionalmente si es una función
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Establece muchos valores
	if (toType (clave) === "objeto") {
		encadenable = verdadero;
		para (yo en clave) {
			acceso (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// Establece un valor
	} más si (valor! == indefinido) {
		encadenable = verdadero;

		if (! isFunction (valor)) {
			crudo = verdadero;
		}

		if (masivo) {

			// Las operaciones masivas se ejecutan en todo el conjunto
			si (crudo) {
				fn.call (elems, valor);
				fn = nulo;

			// ... excepto al ejecutar valores de función
			} más {
				bulk = fn;
				fn = función (elem, _key, value) {
					return bulk.call (jQuery (elem), valor);
				};
			}
		}

		si (fn) {
			para (; i <len; i ++) {
				fn
					elems [i], key, raw?
					valor:
					value.call (elems [i], i, fn (elems [i], key))
				);
			}
		}
	}

	if (encadenable) {
		devolver elems;
	}

	// Obtiene
	if (masivo) {
		return fn.call (elems);
	}

	volver len? fn (elems [0], clave): emptyGet;
};


// Coincide con la cuerda discontinua para camelizar
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Usado por camelCase como devolución de llamada para reemplazar ()
function fcamelCase (_todos, letra) {
	return letter.toUpperCase ();
}

// Convertir punteado en camelCase; utilizado por los módulos css y de datos
// Soporte: IE <= 9 - 11, Edge 12 - 15
// Microsoft olvidó usar el prefijo de su proveedor (# 9572)
function camelCase (string) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (propietario) {

	// Acepta solo:
	// - Nodo
	// - Nodo.ELEMENT_NODE
	// - Nodo.DOCUMENT_NODE
	// - Objeto
	// - Alguna
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




function Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	caché: función (propietario) {

		// Comprueba si el objeto propietario ya tiene caché
		var value = owner [this.expando];

		// Si no, crea uno
		si (! valor) {
			valor = {};

			// Podemos aceptar datos para nodos que no son elementos en navegadores modernos,
			// pero no deberíamos, ver # 8335.
			// Devuelve siempre un objeto vacío.
			if (acceptData (propietario)) {

				// Si se trata de un nodo que es poco probable que esté en cadena o en bucle
				// usa una asignación simple
				if (owner.nodeType) {
					propietario [this.expando] = valor;

				// De lo contrario, asegúrelo en una propiedad no enumerable
				// configurable debe ser verdadero para permitir que la propiedad sea
				// eliminado cuando se eliminan los datos
				} más {
					Object.defineProperty (propietario, this.expando, {
						valor: valor,
						configurable: verdadero
					});
				}
			}
		}

		valor de retorno;
	},
	conjunto: función (propietario, datos, valor) {
		var prop,
			cache = this.cache (propietario);

		// Manejar: [propietario, clave, valor] argumentos
		// Utilice siempre la clave camelCase (gh-2257)
		if (tipo de datos === "cadena") {
			caché [camelCase (datos)] = valor;

		// Manejar: [propietario, {propiedades}] argumentos
		} más {

			// Copie las propiedades una por una al objeto de caché
			para (apoyo en datos) {
				caché [camelCase (prop)] = datos [prop];
			}
		}
		retorno de caché;
	},
	obtener: función (propietario, clave) {
		tecla de retorno === indefinido?
			this.cache (propietario):

			// Utilice siempre la clave camelCase (gh-2257)
			propietario [this.expando] && propietario [this.expando] [camelCase (clave)];
	},
	acceso: función (propietario, clave, valor) {

		// En los casos en los que:
		//
		// 1. No se especificó ninguna clave
		// 2. Se especificó una clave de cadena, pero no se proporcionó ningún valor
		//
		// Toma la ruta de "lectura" y permite que el método get determine
		// qué valor devolver, respectivamente:
		//
		// 1. Todo el objeto de caché
		// 2. Los datos almacenados en la llave
		//
		si (clave === indefinido ||
				((clave && tipo de clave === "cadena") && valor === indefinido)) {

			return this.get (propietario, clave);
		}

		// Cuando la clave no es una cadena, o tanto una clave como un valor
		// se especifican, establecen o extienden (objetos existentes) con:
		//
		// 1. Un objeto de propiedades
		// 2. Una clave y un valor
		//
		this.set (propietario, clave, valor);

		// Dado que la ruta "set" puede tener dos posibles puntos de entrada
		// devuelve los datos esperados según la ruta que se tomó [*]
		valor de retorno! == indefinido? valor: clave;
	},
	eliminar: función (propietario, clave) {
		var i,
			cache = propietario [this.expando];

		si (caché === indefinido) {
			regreso;
		}

		if (clave! == indefinido) {

			// Soporte de matriz o cadena de claves separadas por espacios
			if (Array.isArray (clave)) {

				// Si la clave es una matriz de claves ...
				// Siempre configuramos las claves camelCase, así que elimínelas.
				key = key.map (camelCase);
			} más {
				clave = camelCase (clave);

				// Si existe una clave con los espacios, úsela.
				// De lo contrario, cree una matriz haciendo coincidir espacios que no sean en blanco
				clave = clave en caché?
					[ llave ] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			mientras yo-- ) {
				eliminar caché [clave [i]];
			}
		}

		// Elimina el expando si no hay más datos
		if (clave === undefined || jQuery.isEmptyObject (caché)) {

			// Soporte: Chrome <= 35 - 45
			// El rendimiento de Webkit & Blink se ve afectado al eliminar propiedades
			// de los nodos DOM, así que configúrelo como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (error restringido)
			if (owner.nodeType) {
				propietario [this.expando] = undefined;
			} más {
				eliminar propietario [this.expando];
			}
		}
	},
	hasData: function (propietario) {
		var cache = propietario [this.expando];
		return cache! == undefined &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Resumen de implementación
//
// 1. Aplicar la superficie de API y la compatibilidad semántica con la rama 1.9.x
// 2. Mejorar la capacidad de mantenimiento del módulo reduciendo el almacenamiento
// rutas a un solo mecanismo.
// 3. Utilice el mismo mecanismo único para admitir datos "privados" y "de usuario".
// 4. _Nunca_ exponga datos "privados" al código de usuario (TODO: Drop _data, _removeData)
// 5. Evite exponer detalles de implementación en objetos de usuario (por ejemplo, propiedades de expansión)
// 6. Proporcionar una ruta clara para la actualización de la implementación a WeakMap en 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

function getData (datos) {
	si (datos === "verdadero") {
		devuelve verdadero;
	}

	si (datos === "falso") {
		falso retorno;
	}

	si (datos === "nulo") {
		devolver nulo;
	}

	// Solo convierte a un número si no cambia la cadena
	si (datos === + datos + "") {
		retorno + datos;
	}

	if (rbrace.test (datos)) {
		return JSON.parse (datos);
	}

	devolver datos;
}

function dataAttr (elem, key, data) {
	var nombre;

	// Si no se encontró nada internamente, intente recuperar cualquier
	// datos del atributo HTML5 data- *
	if (datos === indefinido && elem.nodeType === 1) {
		nombre = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		data = elem.getAttribute (nombre);

		if (tipo de datos === "cadena") {
			tratar {
				datos = getData (datos);
			} captura (e) {}

			// Asegúrate de configurar los datos para que no se modifiquen más tarde
			dataUser.set (elem, clave, datos);
		} más {
			datos = indefinido;
		}
	}
	devolver datos;
}

jQuery.extend ({
	hasData: function (elem) {
		devolver dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	datos: función (elem, nombre, datos) {
		return dataUser.access (elem, nombre, datos);
	},

	removeData: function (elem, name) {
		dataUser.remove (elem, nombre);
	},

	// TODO: Ahora que todas las llamadas a _data y _removeData han sido reemplazadas
	// con llamadas directas a métodos dataPriv, estos pueden quedar obsoletos.
	_data: function (elem, name, data) {
		return dataPriv.access (elem, nombre, datos);
	},

	_removeData: function (elem, name) {
		dataPriv.remove (elem, nombre);
	}
});

jQuery.fn.extend ({
	datos: función (clave, valor) {
		var i, nombre, datos,
			elem = esto [0],
			attrs = elem && elem.attributes;

		// Obtiene todos los valores
		si (clave === indefinido) {
			if (this.length) {
				datos = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					mientras yo-- ) {

						// Soporte: solo IE 11
						// Los elementos attrs pueden ser nulos (# 14894)
						if (attrs [i]) {
							nombre = atributos [i] .nombre;
							if (name.indexOf ("data-") === 0) {
								nombre = camelCase (nombre.slice (5));
								dataAttr (elem, nombre, datos [nombre]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", verdadero);
				}
			}

			devolver datos;
		}

		// Establece varios valores
		if (typeof key === "object") {
			devuelve this.each (function () {
				dataUser.set (esto, clave);
			});
		}

		acceso de retorno (esto, función (valor) {
			var datos;

			// El objeto jQuery que llama (coincide con el elemento) no está vacío
			// (y por lo tanto tiene un elemento aparece en este [0]) y el
			// El parámetro `value` no estaba indefinido. Un objeto jQuery vacío
			// resultará en ʻundefined` para elem = this [0] que
			// lanza una excepción si se intenta leer una caché de datos.
			if (elem && value === undefined) {

				// Intenta obtener datos de la caché
				// La clave siempre será camelCased in Data
				data = dataUser.get (elem, clave);
				if (data! == undefined) {
					devolver datos;
				}

				// Intente "descubrir" los datos en
				// datos personalizados HTML5- * attrs
				data = dataAttr (elem, clave);
				if (data! == undefined) {
					devolver datos;
				}

				// Lo intentamos mucho, pero los datos no existen.
				regreso;
			}

			// Establecer los datos ...
			this.each (function () {

				// Siempre almacenamos la llave camelCased
				dataUser.set (esto, clave, valor);
			});
		}, nulo, valor, argumentos.longitud> 1, nulo, verdadero);
	},

	removeData: function (key) {
		devuelve this.each (function () {
			dataUser.remove (esto, clave);
		});
	}
});


jQuery.extend ({
	cola: función (elem, tipo, datos) {
		var queue;

		si (elem) {
			tipo = (tipo || "fx") + "cola";
			cola = dataPriv.get (elem, tipo);

			// Acelera la salida de la cola saliendo rápidamente si esto es solo una búsqueda
			si (datos) {
				if (! cola || Array.isArray (datos)) {
					cola = dataPriv.access (elem, tipo, jQuery.makeArray (datos));
				} más {
					queue.push (datos);
				}
			}
			cola de retorno || [];
		}
	},

	dequeue: function (elem, type) {
		tipo = tipo || "fx";

		var queue = jQuery.queue (elem, tipo),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, tipo),
			siguiente = función () {
				jQuery.dequeue (elem, tipo);
			};

		// Si se quita la cola de fx, siempre elimine el centinela de progreso
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		si (fn) {

			// Agrega un centinela de progreso para evitar que la cola de fx sea
			// retirado automáticamente de la cola
			if (escriba === "fx") {
				queue.unshift ("en progreso");
			}

			// Limpia la última función de parada de la cola
			eliminar hooks.stop;
			fn.call (elem, siguiente, ganchos);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// No público: genera un objeto queueHooks o devuelve el actual
	_queueHooks: function (elem, type) {
		var key = type + "queueHooks";
		return dataPriv.get (elem, clave) || dataPriv.access (elem, clave, {
			vacío: jQuery.Callbacks ("memoria una vez") .add (function () {
				dataPriv.remove (elem, [tipo + "cola", clave]);
			})
		});
	}
});

jQuery.fn.extend ({
	cola: función (tipo, datos) {
		var setter = 2;

		if (typeof type! == "string") {
			datos = tipo;
			tipo = "fx";
			setter--;
		}

		si (argumentos.longitud <establecedor) {
			return jQuery.queue (este [0], tipo);
		}

		devolver datos === indefinido?
			esta :
			this.each (function () {
				var queue = jQuery.queue (este, tipo, datos);

				// Asegurar ganchos para esta cola
				jQuery._queueHooks (este, tipo);

				if (escriba === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (este, tipo);
				}
			});
	},
	dequeue: function (type) {
		devuelve this.each (function () {
			jQuery.dequeue (este, tipo);
		});
	},
	clearQueue: function (tipo) {
		return this.queue (escriba || "fx", []);
	},

	// Obtener una promesa resuelta cuando hay colas de cierto tipo
	// se vacían (fx es el tipo por defecto)
	promesa: función (tipo, obj) {
		var tmp,
			cuenta = 1,
			diferir = jQuery.Deferred (),
			elementos = esto,
			i = esta.longitud,
			resolver = función () {
				if (! (--count)) {
					defer.resolveWith (elementos, [elementos]);
				}
			};

		if (typeof type! == "string") {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		mientras yo-- ) {
			tmp = dataPriv.get (elementos [i], tipo + "queueHooks");
			if (tmp && tmp.empty) {
				contar ++;
				tmp.empty.add (resolver);
			}
		}
		resolver();
		return diferir.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[e][+-]?\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Arriba", "Derecha", "Abajo", "Izquierda"];

var documentElement = document.documentElement;



	var isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem);
		},
		compuesto = {compuesto: verdadero};

	// Soporte: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 solamente
	// Verifique el archivo adjunto a través de los límites del DOM de sombra cuando sea posible (gh-3504)
	// Soporte: iOS 10.0-10.2 solamente
	// Las primeras versiones de iOS 10 admiten ʻattachShadow` pero no `getRootNode`,
	// que conduce a errores. Necesitamos buscar `getRootNode`.
	if (documentElement.getRootNode) {
		isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem) ||
				elem.getRootNode (compuesto) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree puede ser llamado desde la función de filtro jQuery #;
		// en ese caso, el elemento será el segundo argumento
		elem = el || elem;

		// El estilo en línea triunfa sobre todo
		return elem.style.display === "ninguno" ||
			elem.style.display === "" &&

			// De lo contrario, verifique el estilo calculado
			// Soporte: Firefox <= 43 - 45
			// Los elementos desconectados pueden tener una pantalla calculada: ninguna, así que primero confirme que elem es
			// en el documento.
			está adjunto (elem) &&

			jQuery.css (elem, "pantalla") === "ninguno";
	};



función ajustarCSS (elem, prop, valueParts, interpolación) {
	var ajustado, escala,
		maxIteraciones = 20,
		currentValue = interpolación?
			function () {
				return tween.cur ();
			}:
			function () {
				return jQuery.css (elem, prop, "");
			},
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// Se requiere el cálculo del valor inicial para posibles desajustes de unidades
		initialInUnit = elem.nodeType &&
			(jQuery.cssNumber [prop] || unidad! == "px" && + inicial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unidad) {

		// Soporte: Firefox <= 54
		// Reducir a la mitad el valor objetivo de la iteración para evitar la interferencia de los límites superiores de CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confianza informadas por jQuery.css
		unidad = unidad || initialInUnit [3];

		// Iterativamente aproximado desde un punto de partida distinto de cero
		initialInUnit = + initial || 1;

		while (maxIterations--) {

			// Evaluar y actualizar nuestra mejor suposición (duplicando las suposiciones que ponen en cero).
			// Finalizar si la escala es igual o cruza 1 (haciendo que el producto nuevo * antiguo no sea positivo).
			jQuery.style (elem, prop, initialInUnit + unidad);
			if ((1 - scale) * (1 - (scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unidad);

		// Asegúrese de actualizar las propiedades de interpolación más adelante
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + inicial || 0;

		// Aplicar desplazamiento relativo (+ = / - =) si se especifica
		ajustado = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		si (interpolación) {
			tween.unit = unidad;
			tween.start = initialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

function getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nombredenodo];

	if (mostrar) {
		pantalla de retorno;
	}

	temp = doc.body.appendChild (doc.createElement (nombredenodo));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	si (mostrar === "ninguno") {
		display = "bloque";
	}
	defaultDisplayMap [nodeName] = mostrar;

	pantalla de retorno;
}

función showHide (elementos, mostrar) {
	pantalla var, elem,
		valores = [],
		índice = 0,
		length = elements.length;

	// Determine un nuevo valor de visualización para los elementos que necesitan cambiar
	para (; índice <longitud; índice ++) {
		elem = elementos [índice];
		if (! elem.style) {
			Seguir;
		}

		display = elem.style.display;
		si (mostrar) {

			// Dado que forzamos la visibilidad de los elementos ocultos en cascada, una inmediata (y lenta)
			// Se requiere verificación en este primer ciclo a menos que tengamos un valor de visualización no vacío (ya sea
			// en línea o a punto de ser restaurado)
			si (mostrar === "ninguno") {
				valores [índice] = dataPriv.get (elem, "display") || nulo;
				if (! valores [índice]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valores [índice] = getDefaultDisplay (elem);
			}
		} más {
			if (display! == "none") {
				valores [índice] = "ninguno";

				// Recuerda lo que estamos sobrescribiendo
				dataPriv.set (elem, "pantalla", pantalla);
			}
		}
	}

	// Establecer la visualización de los elementos en un segundo bucle para evitar un reflujo constante
	para (índice = 0; índice <longitud; índice ++) {
		if (valores [índice]! = nulo) {
			elementos [índice] .style.display = valores [índice];
		}
	}

	devolver elementos;
}

jQuery.fn.extend ({
	mostrar: función () {
		return showHide (esto, verdadero);
	},
	ocultar: función () {
		return showHide (esto);
	},
	alternar: función (estado) {
		if (typeof state === "boolean") {
			estado de retorno? this.show (): this.hide ();
		}

		devuelve this.each (function () {
			if (isHiddenWithinTree (esto)) {
				jQuery (esto) .show ();
			} más {
				jQuery (esto) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: casilla de verificación | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) / i);

var rscriptType = (/ ^ $ | ^ módulo $ | \ / (?: java | ecma) script / i);



(función () {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ("div")),
		input = document.createElement ("entrada");

	// Soporte: Android 4.0 - 4.3 solamente
	// Verifique el estado perdido si el nombre está configurado (# 11217)
	// Soporte: Aplicaciones web de Windows (WWA)
	// `name` y` type` deben usar .setAttribute para WWA (# 14901)
	input.setAttribute ("tipo", "radio");
	input.setAttribute ("comprobado", "comprobado");
	input.setAttribute ("nombre", "t");

	div.a ppendChild (entrada);

	// Soporte: Android <= 4.1 solamente
	// El WebKit anterior no clona el estado verificado correctamente en fragmentos
	support.checkClone = div.cloneNode (verdadero) .cloneNode (verdadero) .lastChild.checked;

	// Soporte: IE <= 11 solamente
	// Asegúrese de que textarea (y casilla de verificación) defaultValue esté clonado correctamente
	div.innerHTML = "<textarea> x </textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;

	// Soporte: IE <= 9 solamente
	// IE <= 9 reemplaza las etiquetas <option> con su contenido cuando se inserta fuera de
	// el elemento de selección.
	div.innerHTML = "<opción> </opción>";
	support.option = !! div.lastChild;
}) ();


// Tenemos que cerrar estas etiquetas para admitir XHTML (# 13200)
var wrapMap = {

	// Los analizadores XHTML no insertan elementos mágicamente en el
	// de la misma manera que lo hacen los analizadores de sopa de etiquetas. Entonces no podemos acortar
	// esto omitiendo <tbody> u otros elementos obligatorios.
	thead: [1, "<table>", "</table>"],
	col: [2, "<table> <colgroup>", "</colgroup> </table>"],
	tr: [2, "<table> <tbody>", "</tbody> </table>"],
	td: [3, "<table> <tbody> <tr>", "</tr> </tbody> </table>"],

	_predeterminado: [0, "", ""]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Soporte: IE <= 9 solamente
if (! support.option) {
	wrapMap.optgroup = wrapMap.option = [1, "<select multiple = 'multiple'>", "</select>"];
}


function getAll (contexto, etiqueta) {

	// Soporte: IE <= 9 - 11 solamente
	// Use typeof para evitar la invocación del método de argumento cero en objetos host (# 15151)
	var ret;

	if (typeof context.getElementsByTagName! == "undefined") {
		ret = context.getElementsByTagName (etiqueta || "*");

	} else if (typeof context.querySelectorAll! == "undefined") {
		ret = context.querySelectorAll (etiqueta || "*");

	} más {
		ret = [];
	}

	if (etiqueta === indefinido || etiqueta && nodeName (contexto, etiqueta)) {
		return jQuery.merge ([contexto], ret);
	}

	return ret;
}


// Marcar los scripts como ya evaluados
function setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"globalEval",
			! refElements || dataPriv.get (refElements [i], "globalEval")
		);
	}
}


var rhtml = / <| & #? \ w +; /;

función buildFragment (elementos, contexto, scripts, selección, ignorado) {
	var elem, tmp, etiqueta, envoltura, adjunto, j,
		fragmento = context.createDocumentFragment (),
		nodos = [],
		i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		elem = elems [i];

		si (elem || elem === 0) {

			// Agregar nodos directamente
			if (toType (elem) === "objeto") {

				// Soporte: Android <= 4.0 solamente, solo PhantomJS 1
				// push.apply (_, arraylike) arroja un WebKit antiguo
				jQuery.merge (nodos, elem.nodeType? [elem]: elem);

			// Convertir no html en un nodo de texto
			} else if (! rhtml.test (elem)) {
				nodes.push (context.createTextNode (elem));

			// Convertir html en nodos DOM
			} más {
				tmp = tmp || fragment.appendChild (context.createElement ("div"));

				// Deserializar una representación estándar
				etiqueta = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
				wrap = wrapMap [etiqueta] || wrapMap._default;
				tmp.innerHTML = envolver [1] + jQuery.htmlPrefiltro (elem) + envolver [2];

				// Descender a través de envoltorios hasta el contenido correcto
				j = envolver [0];
				while (j--) {
					tmp = tmp.lastChild;
				}

				// Soporte: Android <= 4.0 solamente, solo PhantomJS 1
				// push.apply (_, arraylike) arroja un WebKit antiguo
				jQuery.merge (nodos, tmp.childNodes);

				// Recuerda el contenedor de nivel superior
				tmp = fragment.firstChild;

				// Asegúrese de que los nodos creados sean huérfanos (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// Quitar envoltorio del fragmento
	fragment.textContent = "";

	i = 0;
	while ((elem = nodos [i ++])) {

		// Omitir elementos que ya están en la colección de contexto (trac-4087)
		if (selección && jQuery.inArray (elem, selección)> -1) {
			if (ignorado) {
				ignorado empujar (elem);
			}
			Seguir;
		}

		adjunto = está adjunto (elem);

		// Adjuntar al fragmento
		tmp = getAll (fragment.appendChild (elem), "script");

		// Conservar el historial de evaluación del script
		si (adjunto) {
			setGlobalEval (tmp);
		}

		// Capturar ejecutables
		if (scripts) {
			j = 0;
			while ((elem = tmp [j ++])) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	devolver fragmento;
}


var
	rkeyEvent = / ^ tecla /,
	rmouseEvent = / ^ (?: mouse | puntero | menú contextual | arrastrar | soltar) | clic /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue () {
	devuelve verdadero;
}

function returnFalse () {
	falso retorno;
}

// Soporte: IE <= 9 - 11+
// focus () y blur () son asincrónicos, excepto cuando no son operativos.
// Entonces, espere que el enfoque sea sincrónico cuando el elemento ya está activo,
// y difuminar para ser sincrónico cuando el elemento aún no está activo.
// (el enfoque y el desenfoque siempre son sincronizados en otros navegadores compatibles,
// esto solo define cuándo podemos contar con él).
function hopeSync (elem, type) {
	return (elem === safeActiveElement ()) === (type === "focus");
}

// Soporte: IE <= 9 solamente
// Acceder a document.activeElement puede lanzar inesperadamente
// https://bugs.jquery.com/ticket/13393
function safeActiveElement () {
	tratar {
		return document.activeElement;
	} atrapar (err) {}
}

función en (elem, tipos, selector, datos, fn, uno) {
	var origFn, tipo;

	// Los tipos pueden ser un mapa de tipos / manejadores
	if (typeof types === "object") {

		// (tipos de objeto, selector, datos)
		if (typeof selector! == "string") {

			// (tipos-objeto, datos)
			datos = datos || selector;
			selector = indefinido;
		}
		para (escriba tipos) {
			on (elem, tipo, selector, datos, tipos [tipo], uno);
		}
		return elem;
	}

	si (datos == nulo && fn == nulo) {

		// (tipos, fn)
		fn = selector;
		datos = selector = indefinido;
	} más si (fn == nulo) {
		if (typeof selector === "cadena") {

			// (tipos, selector, fn)
			fn = datos;
			datos = indefinido;
		} más {

			// (tipos, datos, fn)
			fn = datos;
			datos = selector;
			selector = indefinido;
		}
	}
	si (fn === falso) {
		fn = returnFalse;
	} más si (! fn) {
		return elem;
	}

	si (uno === 1) {
		origFn = fn;
		fn = función (evento) {

			// Puede usar un conjunto vacío, ya que el evento contiene la información
			jQuery (). off (evento);
			return origFn.apply (esto, argumentos);
		};

		// Use la misma guía para que la persona que llama pueda eliminar usando origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	return elem.each (function () {
		jQuery.event.add (esto, tipos, fn, datos, selector);
	});
}

/ *
 * Funciones auxiliares para la gestión de eventos, que no forman parte de la interfaz pública.
 * Apoyos a la biblioteca addEvent de Dean Edwards para muchas de las ideas.
 * /
jQuery.event = {

	global: {},

	agregar: función (elem, tipos, manejador, datos, selector) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especial, controladores, tipo, espacios de nombres, origType,
			elemData = dataPriv.get (elem);

		// Solo adjunte eventos a objetos que acepten datos
		if (! acceptData (elem)) {
			regreso;
		}

		// La persona que llama puede pasar un objeto de datos personalizados en lugar del controlador
		if (handler.handler) {
			handleObjIn = manejador;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Asegúrese de que los selectores no válidos arrojen excepciones en el momento de adjuntar
		// Evaluar contra documentElement en caso de que elem sea un nodo que no sea un elemento (por ejemplo, documento)
		if (selector) {
			jQuery.find.matchesSelector (documentElement, selector);
		}

		// Asegúrese de que el controlador tenga una ID única, que se usa para encontrarlo / eliminarlo más tarde
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// Inicia la estructura de eventos del elemento y el controlador principal, si este es el primero
		if (! (eventos = elemData.events)) {
			eventos = elemData.events = Object.create (nulo);
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {

				// Descartar el segundo evento de un jQuery.event.trigger () y
				// cuando se llama a un evento después de que se haya descargado una página
				return typeof jQuery! == "undefined" && jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, argumentos): indefinido;
			};
		}

		// Maneja múltiples eventos separados por un espacio
		tipos = (tipos || "") .match (rnothtmlwhite) || [""];
		t = tipos.longitud;
		while (t--) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			espacios de nombres = (tmp [2] || "") .split (".") .sort ();

			// Debe * haber un tipo, no adjuntar controladores de solo espacio de nombres
			if (! type) {
				Seguir;
			}

			// Si el evento cambia de tipo, use los controladores de eventos especiales para el tipo cambiado
			especial = jQuery.event.special [tipo] || {};

			// Si el selector está definido, determina el tipo de api de evento especial, de lo contrario, se da el tipo
			type = (selector? special.delegateType: special.bindType) || tipo;

			// Actualización especial basada en el tipo de reinicio reciente
			especial = jQuery.event.special [tipo] || {};

			// handleObj se pasa a todos los controladores de eventos
			handleObj = jQuery.extend ({
				tipo: tipo,
				origType: origType,
				datos: datos,
				manipulador: manipulador,
				guid: handler.guid,
				selector: selector,
				needContext: selector && jQuery.expr.match.needsContext.test (selector),
				espacio de nombres: espacios de nombres.join (".")
			}, handleObjIn);

			// Inicia la cola del controlador de eventos si somos los primeros
			if (! (manejadores = eventos [tipo])) {
				manejadores = eventos [tipo] = [];
				handlers.delegateCount = 0;

				// Solo use addEventListener si el controlador de eventos especiales devuelve falso
				if (! special.setup ||
					special.setup.call (elem, data, namespaces, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (tipo, eventHandle);
					}
				}
			}

			if (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Agregar a la lista de controladores del elemento, delegados al frente
			if (selector) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} más {
				handlers.push (handleObj);
			}

			// Realice un seguimiento de los eventos que se han utilizado alguna vez, para la optimización de eventos
			jQuery.event.global [tipo] = verdadero;
		}

	},

	// Separar un evento o un conjunto de eventos de un elemento
	remove: function (elem, types, handler, selector, mappedTypes) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especial, controladores, tipo, espacios de nombres, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (eventos = elemData.events)) {
			regreso;
		}

		// Una vez por cada tipo. Espacio de nombres en tipos; el tipo puede omitirse
		tipos = (tipos || "") .match (rnothtmlwhite) || [""];
		t = tipos.longitud;
		while (t--) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			espacios de nombres = (tmp [2] || "") .split (".") .sort ();

			// Desvincula todos los eventos (en este espacio de nombres, si se proporciona) para el elemento
			if (! type) {
				para (escriba eventos) {
					jQuery.event.remove (elem, tipo + tipos [t], manejador, selector, verdadero);
				}
				Seguir;
			}

			especial = jQuery.event.special [tipo] || {};
			type = (selector? special.delegateType: special.bindType) || tipo;
			manejadores = eventos [tipo] || [];
			tmp = tmp [2] &&
				new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)");

			// Eliminar eventos coincidentes
			origCount = j = handlers.length;
			while (j--) {
				handleObj = handlers [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Eliminamos el controlador de eventos genérico si eliminamos algo y no existen más controladores
			// (evita la posibilidad de una recursividad sin fin durante la eliminación de controladores de eventos especiales)
			if (origCount &&! handlers.length) {
				if (! special.teardown ||
					special.teardown.call (elem, namespaces, elemData.handle) === falso) {

					jQuery.removeEvent (elem, tipo, elemData.handle);
				}

				eliminar eventos [tipo];
			}
		}

		// Eliminar datos y expandir si ya no se usan
		if (jQuery.isEmptyObject (eventos)) {
			dataPriv.remove (elem, "manejar eventos");
		}
	},

	despacho: function (nativeEvent) {

		var i, j, ret, emparejado, handleObj, handlerQueue,
			args = nueva matriz (argumentos.longitud),

			// Crea un jQuery.Event escribible desde el objeto de evento nativo
			evento = jQuery.event.fix (nativeEvent),

			manipuladores = (
					dataPriv.get (esto, "eventos") || Object.create (nulo)
				) [event.type] || [],
			especial = jQuery.event.special [event.type] || {};

		// Utilice jQuery.Event corregido en lugar del evento nativo (solo lectura)
		args [0] = evento;

		para (i = 1; i <argumentos.longitud; i ++) {
			argumentos [i] = argumentos [i];
		}

		event.delegateTarget = esto;

		// Llame al gancho preDispatch para el tipo mapeado y déjelo rescatar si lo desea
		if (special.preDispatch && special.preDispatch.call (this, event) === false) {
			regreso;
		}

		// Determinar controladores
		handlerQueue = jQuery.event.handlers.call (esto, evento, controladores);

		// Ejecuta los delegados primero; pueden querer detener la propagación debajo de nosotros
		i = 0;
		while ((coincidente = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = match.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// Si el evento tiene un espacio de nombres, entonces cada controlador solo se invoca si está
				// especialmente universal o sus espacios de nombres son un superconjunto de los del evento.
				if (! event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (coincidente.elem, args);

					si (ret! == indefinido) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Llame al gancho postDispatch para el tipo mapeado
		if (special.postDispatch) {
			special.postDispatch.call (esto, evento);
		}

		return event.result;
	},

	handlers: function (evento, controladores) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Encuentra controladores de delegados
		si (delegateCount &&

			// Soporte: IE <= 9
			// Árboles de instancia SVG <use> de agujero negro (trac-13180)
			cur.nodeType &&

			// Soporte: Firefox <= 42
			// Suprime los clics que infringen las especificaciones que indican un botón de puntero no principal (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Soporte: solo IE 11
			// ... pero no los "clics" de las teclas de flecha de las entradas de radio, que pueden tener `button` -1 (gh-2343)
			! (event.type === "haga clic" && event.button> = 1)) {

			para (; cur! == esto; cur = cur.parentNode || esto) {

				// No marque los no elementos (# 13208)
				// No procese clics en elementos deshabilitados (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 &&! (event.type === "click" && cur.disabled === true)) {
					matchedHandlers = [];
					matchedSelectors = {};
					para (i = 0; i <delegateCount; i ++) {
						handleObj = handlers [i];

						// No entre en conflicto con las propiedades de Object.prototype (# 13203)
						sel = handleObj.selector + "";

						if (matchedSelectors [sel] === undefined) {
							matchedSelectors [sel] = handleObj.needsContext?
								jQuery (sel, esto) .index (cur)> -1:
								jQuery.find (sel, this, null, [cur]) .length;
						}
						if (matchedSelectors [sel]) {
							matchedHandlers.push (handleObj);
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push ({elem: cur, handlers: matchedHandlers});
					}
				}
			}
		}

		// Agrega los manejadores restantes (directamente enlazados)
		cur = esto;
		if (delegateCount <handlers.length) {
			handlerQueue.push ({elem: cur, handlers: handlers.slice (delegateCount)});
		}

		return handlerQueue;
	},

	addProp: function (nombre, gancho) {
		Object.defineProperty (jQuery.Event.prototype, name, {
			enumerable: verdadero,
			configurable: verdadero,

			get: isFunction (gancho)?
				function () {
					if (this.originalEvent) {
							return hook (this.originalEvent);
					}
				}:
				function () {
					if (this.originalEvent) {
							return this.originalEvent [nombre];
					}
				},

			conjunto: función (valor) {
				Object.defineProperty (este, nombre, {
					enumerable: verdadero,
					configurable: verdadero,
					escribible: verdadero,
					valor: valor
				});
			}
		});
	},

	fix: function (originalEvent) {
		return originalEvent [jQuery.expando]?
			originalEvent:
			nuevo jQuery.Event (originalEvent);
	},

	especial: {
		carga: {

			// Evita que los eventos image.load activados se propaguen a window.load
			noBubble: verdadero
		},
		haga clic en: {

			// Utilice el evento nativo para garantizar el estado correcto de las entradas comprobables
			configuración: función (datos) {

				// Para la compresibilidad mutua con _default, reemplace el acceso `this` con una var local.
				// `|| data` es un código muerto destinado solo a preservar la variable a través de la minificación.
				var el = esto || datos;

				// Reclama el primer controlador
				if (rcheckableType.test (el.type) &&
					el.click && nodeName (el, "input")) {

					// dataPriv.set (el, "clic", ...)
					leverageNative (el, "clic", returnTrue);
				}

				// Devuelve falso para permitir el procesamiento normal en la persona que llama
				falso retorno;
			},
			disparador: función (datos) {

				// Para la compresibilidad mutua con _default, reemplace el acceso `this` con una var local.
				// `|| data` es un código muerto destinado solo a preservar la variable a través de la minificación.
				var el = esto || datos;

				// Forzar la configuración antes de activar un clic
				if (rcheckableType.test (el.type) &&
					el.click && nodeName (el, "input")) {

					leverageNative (el, "clic");
				}

				// Devuelve un valor no falso para permitir la propagación normal de la ruta del evento
				devuelve verdadero;
			},

			// Para la coherencia entre navegadores, suprima .click () nativo en los enlaces
			// Evítelo también si actualmente estamos dentro de una pila de eventos nativos apalancados
			_default: function (evento) {
				var target = event.target;
				return rcheckableType.test (target.type) &&
					target.click && nodeName (objetivo, "entrada") &&
					dataPriv.get (destino, "clic") ||
					nodeName (objetivo, "a");
			}
		},

		beforeunload: {
			postDispatch: function (evento) {

				// Soporte: Firefox 20+
				// Firefox no alerta si el campo returnValue no está configurado.
				if (event.result! == undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Asegurar la presencia de un detector de eventos que maneja los activados manualmente
// eventos sintéticos al interrumpir el progreso hasta que se vuelva a invocar en respuesta a
// * eventos nativos * que dispara directamente, asegurando que los cambios de estado tengan
// ya ha ocurrido antes de que se invoquen a otros oyentes.
function leverageNative (el, type, waitSync) {

	// La falta de hopeSync indica una llamada de activación, que debe forzar la configuración a través de jQuery.event.add
	if (! hopeSync) {
		if (dataPriv.get (el, type) === undefined) {
			jQuery.event.add (el, tipo, returnTrue);
		}
		regreso;
	}

	// Registre el controlador como un controlador universal especial para todos los espacios de nombres de eventos
	dataPriv.set (el, tipo, falso);
	jQuery.event.add (el, type, {
		espacio de nombres: falso,
		controlador: función (evento) {
			var notAsync, resultado,
				guardado = dataPriv.get (este, tipo);

			if ((event.isTrigger & 1) && this [type]) {

				// Interrumpe el procesamiento del evento ed .trigger () sintético externo
				// Los datos guardados deben ser falsos en tales casos, pero pueden ser un objeto de captura sobrante
				// desde un controlador nativo asincrónico (gh-4350)
				if (! Saved.length) {

					// Almacenar argumentos para usarlos al manejar el evento nativo interno
					// Siempre habrá al menos un argumento (un objeto de evento), entonces esta matriz
					// no se confundirá con un objeto de captura sobrante.
					guardado = slice.call (argumentos);
					dataPriv.set (este, tipo, guardado);

					// Activa el evento nativo y captura su resultado
					// Soporte: IE <= 9 - 11+
					// focus () y blur () son asincrónicos
					notAsync = waitSync (este, tipo);
					este tipo ]();
					resultado = dataPriv.get (este, tipo);
					if (guardado! == resultado || notAsync) {
						dataPriv.set (este, tipo, falso);
					} más {
						resultado = {};
					}
					si (guardado! == resultado) {

						// Cancelar el evento sintético externo
						event.stopImmediatePropagation ();
						event.preventDefault ();
						return result.value;
					}

				// Si este es un evento sintético interno para un evento con un sustituto burbujeante
				// (enfocar o difuminar), suponga que el sustituto ya se propagó al desencadenar el
				// evento nativo y evitar que vuelva a suceder aquí.
				// Esto técnicamente hace que el orden sea incorrecto en `.trigger ()` (en el que el
				// el sustituto burbujeante se propaga * después * de la base no burbujeante), pero eso parece
				// menos malo que la duplicación.
				} else if ((jQuery.event.special [tipo] || {}) .delegateType) {
					event.stopPropagation ();
				}

			// Si se trata de un evento nativo activado anteriormente, ahora todo está en orden
			// Dispara un evento sintético interno con los argumentos originales
			} else if (Saved.length) {

				// ... y captura el resultado
				dataPriv.set (este, tipo, {
					valor: jQuery.event.trigger (

						// Soporte: IE <= 9 - 11+
						// Amplíe con el prototipo para restablecer el stopImmediatePropagation () anterior
						jQuery.extend (guardado [0], jQuery.Event.prototype),
						rebanada.salvada (1),
						esta
					)
				});

				// Abortar el manejo del evento nativo
				event.stopImmediatePropagation ();
			}
		}
	});
}

jQuery.removeEvent = function (elem, type, handle) {

	// Este "si" es necesario para objetos simples
	if (elem.removeEventListener) {
		elem.removeEventListener (tipo, identificador);
	}
};

jQuery.Event = function (src, props) {

	// Permitir la creación de instancias sin la palabra clave 'nueva'
	if (! (esta instancia de jQuery.Event)) {
		return new jQuery.Event (src, props);
	}

	// Objeto de evento
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// Los eventos que propagan el documento pueden haber sido marcados como prevenidos
		// por un manejador más abajo del árbol; reflejar el valor correcto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === indefinido &&

				// Soporte: Android <= 2.3 solamente
				src.returnValue === falso?
			returnTrue:
			falso retorno;

		// Crear propiedades de destino
		// Soporte: Safari <= 6 - 7 solamente
		// El destino no debe ser un nodo de texto (# 504, # 13143)
		this.target = (src.target && src.target.nodeType === 3)?
			src.target.parentNode:
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} más {
		this.type = src;
	}

	// Coloca propiedades proporcionadas explícitamente en el objeto de evento
	if (props) {
		jQuery.extend (esto, apoyos);
	}

	// Crea una marca de tiempo si el evento entrante no tiene una
	this.timeStamp = src && src.timeStamp || Date.now ();

	// Marcarlo como fijo
	esto [jQuery.expando] = verdadero;
};

// jQuery.Event se basa en eventos DOM3 según lo especificado por ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: falso,

	preventDefault: function () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if (e &&! this.isSimulated) {
			e.preventDefault ();
		}
	},
	stopPropagation: function () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopPropagation ();
		}
	},
	stopImmediatePropagation: function () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// Incluye todos los accesorios de eventos comunes, incluidos los accesorios específicos de KeyEvent y MouseEvent
jQuery.each ({
	altKey: verdadero,
	burbujas: cierto,
	cancelable: verdadero,
	changeTouches: cierto,
	ctrlKey: verdadero,
	detalle: cierto,
	eventPhase: verdadero,
	metaKey: verdadero,
	pageX: verdadero,
	pageY: verdadero,
	shiftKey: verdadero,
	ver: verdadero,
	"char": verdadero,
	código: verdadero,
	charCode: verdadero,
	clave: verdadero,
	keyCode: verdadero,
	botón: cierto,
	botones: cierto,
	clientX: cierto,
	clientY: cierto,
	offsetX: verdadero,
	offsetY: verdadero,
	pointerId: verdadero,
	pointerType: verdadero,
	screenX: cierto,
	screenY: verdadero,
	targetTouches: verdadero,
	toElement: verdadero,
	toca: cierto,

	que: función (evento) {
		var button = event.button;

		// Agregar cuál para eventos clave
		if (event.which == null && rkeyEvent.test (event.type)) {
			return event.charCode! = null? event.charCode: event.keyCode;
		}

		// Agregar cuál para hacer clic: 1 === izquierda; 2 === medio; 3 === derecha
		if (! event.which && button! == undefined && rmouseEvent.test (event.type)) {
			si (botón & 1) {
				return 1;
			}

			si (botón & 2) {
				volver 3;
			}

			si (botón & 4) {
				volver 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp);

jQuery.each ({focus: "focusin", blur: "focusout"}, function (type, delegateType) {
	jQuery.event.special [tipo] = {

		// Utilice el evento nativo si es posible para que la secuencia de desenfoque / enfoque sea correcta
		configuración: función () {

			// Reclama el primer controlador
			// dataPriv.set (esto, "foco", ...)
			// dataPriv.set (esto, "difuminar", ...)
			leverageNative (este, tipo, esperaSync);

			// Devuelve falso para permitir el procesamiento normal en la persona que llama
			falso retorno;
		},
		disparador: función () {

			// Forzar la configuración antes del disparo
			leverageNative (este, tipo);

			// Devuelve un valor no falso para permitir la propagación normal de la ruta del evento
			devuelve verdadero;
		},

		delegateType: delegateType
	};
});

// Crear eventos mouseenter / leave usando mouseover / out y controles de tiempo de evento
// para que la delegación de eventos funcione en jQuery.
// Haz lo mismo para pointerenter / pointerleave y pointerover / pointerout
//
// Soporte: solo Safari 7
// Safari envía mouseenter con demasiada frecuencia; ver:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para la descripción del error (también existía en versiones anteriores de Chrome).
jQuery.each ({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function (orig, fix) {
	jQuery.event.special [orig] = {
		delegateType: arreglar,
		bindType: arreglar,

		manejar: función (evento) {
			var ret,
				objetivo = esto,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// Para mouseenter / leave, llame al controlador si el relacionado está fuera del objetivo.
			// NB: No relatedTarget si el mouse a la izquierda / ingresó a la ventana del navegador
			if (! related || (related! == target &&! jQuery.contains (target, related))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (esto, argumentos);
				event.type = fix;
			}
			return ret;
		}
	};
});

jQuery.fn.extend ({

	on: function (tipos, selector, datos, fn) {
		volver sobre (esto, tipos, selector, datos, fn);
	},
	uno: función (tipos, selector, datos, fn) {
		return on (esto, tipos, selector, datos, fn, 1);
	},
	off: function (tipos, selector, fn) {
		var handleObj, tipo;
		if (tipos && tipos.preventDefault && tipos.handleObj) {

			// (evento) enviado jQuery.Event
			handleObj = types.handleObj;
			jQuery (types.delegateTarget) .off (
				handleObj.namespace?
					handleObj.origType + "." + handleObj.namespace:
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			devuelve esto;
		}
		if (typeof types === "object") {

			// (tipos-objeto [, selector])
			para (escriba tipos) {
				this.off (tipo, selector, tipos [tipo]);
			}
			devuelve esto;
		}
		if (selector === falso || tipo de selector === "función") {

			// (tipos [, fn])
			fn = selector;
			selector = indefinido;
		}
		si (fn === falso) {
			fn = returnFalse;
		}
		devuelve this.each (function () {
			jQuery.event.remove (esto, tipos, fn, selector);
		});
	}
});


var

	// Soporte: IE <= 10-11, Edge 12-13 solamente
	// En IE / Edge, el uso de grupos de expresiones regulares aquí provoca graves ralentizaciones.
	// Ver https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <script | <estilo | <enlace / i,

	// comprobado = "comprobado" o comprobado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <! (?: \ [CDATA \ [| -) | (?: \] \] | -)> \ s * $ / g;

// Prefiere un tbody sobre su tabla padre para contener nuevas filas
function manipulationTarget (elem, content) {
	if (nodeName (elem, "tabla") &&
		nodeName (content.nodeType! == 11? content: content.firstChild, "tr")) {

		return jQuery (elem) .children ("tbody") [0] || elem;
	}

	return elem;
}

// Reemplazar / restaurar el atributo de tipo de los elementos del script para una manipulación DOM segura
function disableScript (elem) {
	elem.type = (elem.getAttribute ("tipo")! == null) + "/" + elem.type;
	return elem;
}
function restoreScript (elem) {
	if ((elem.type || "") .slice (0, 5) === "true /") {
		elem.type = elem.type.slice (5);
	} más {
		elem.removeAttribute ("tipo");
	}

	return elem;
}

function cloneCopyEvent (src, dest) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if (dest.nodeType! == 1) {
		regreso;
	}

	// 1. Copia datos privados: eventos, manejadores, etc.
	if (dataPriv.hasData (src)) {
		pdataOld = dataPriv.get (src);
		eventos = pdataOld.events;

		if (eventos) {
			dataPriv.remove (dest, "manejar eventos");

			para (escriba eventos) {
				para (i = 0, l = eventos [tipo] .length; i <l; i ++) {
					jQuery.event.add (destino, tipo, eventos [tipo] [i]);
				}
			}
		}
	}

	// 2. Copiar datos de usuario
	if (dataUser.hasData (src)) {
		udataOld = dataUser.access (src);
		udataCur = jQuery.extend ({}, udataOld);

		dataUser.set (dest, udataCur);
	}
}

// Corregir errores de IE, ver pruebas de soporte
function fixInput (src, dest) {
	var nodeName = dest.nodeName.toLowerCase ();

	// No persiste el estado marcado de una casilla de verificación o botón de opción clonado.
	if (nodeName === "input" && rcheckableType.test (src.type)) {
		dest.checked = src.checked;

	// No devuelve la opción seleccionada al estado seleccionado predeterminado al clonar opciones
	} else if (nodeName === "input" || nodeName === "textarea") {
		dest.defaultValue = src.defaultValue;
	}
}

función domManip (colección, argumentos, devolución de llamada, ignorado) {

	// Aplanar cualquier arreglo anidado
	args = plano (args);

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = colección.longitud,
		iNoClone = l - 1,
		valor = argumentos [0],
		valueIsFunction = isFunction (valor);

	// No podemos clonar fragmentos de nodo que contengan marcado, en WebKit
	if (valueIsFunction ||
			(l> 1 && tipo de valor === "cadena" &&
				! support.checkClone && rchecked.test (value))) {
		return collection.each (función (índice) {
			var self = collection.eq (índice);
			if (valueIsFunction) {
				args [0] = value.call (esto, índice, self.html ());
			}
			domManip (self, args, callback, ignorado);
		});
	}

	si (l) {
		fragment = buildFragment (args, colección [0] .ownerDocument, falso, colección, ignorado);
		first = fragment.firstChild;

		if (fragment.childNodes.length === 1) {
			fragment = first;
		}

		// Requiere contenido nuevo o interés en elementos ignorados para invocar la devolución de llamada
		si (primero || ignorado) {
			scripts = jQuery.map (getAll (fragment, "script"), disableScript);
			hasScripts = scripts.length;

			// Usa el fragmento original para el último elemento
			// en lugar del primero porque puede terminar
			// vaciarse incorrectamente en determinadas situaciones (# 8070).
			para (; i <l; i ++) {
				nodo = fragmento;

				si (i! == iNoClone) {
					nodo = jQuery.clone (nodo, verdadero, verdadero);

					// Conserve las referencias a los scripts clonados para su posterior restauración
					if (hasScripts) {

						// Soporte: Android <= 4.0 solamente, solo PhantomJS 1
						// push.apply (_, arraylike) arroja un WebKit antiguo
						jQuery.merge (scripts, getAll (nodo, "script"));
					}
				}

				callback.call (colección [i], nodo, i);
			}

			if (hasScripts) {
				doc = scripts [scripts.length - 1] .ownerDocument;

				// Rehabilitar scripts
				jQuery.map (scripts, restoreScript);

				// Evaluar los scripts ejecutables en la primera inserción del documento
				para (i = 0; i <hasScripts; i ++) {
					nodo = scripts [i];
					if (rscriptType.test (node.type || "") &&
						! dataPriv.access (nodo, "globalEval") &&
						jQuery.contains (doc, nodo)) {

						if (node.src && (node.type || "") .toLowerCase ()! == "module") {

							// Dependencia AJAX opcional, pero no ejecutará scripts si no están presentes
							if (jQuery._evalUrl &&! node.noModule) {
								jQuery._evalUrl (node.src, {
									nonce: node.nonce || node.getAttribute ("nonce")
								}, Doc );
							}
						} más {
							DOMEval (node.textContent.replace (rcleanScript, ""), nodo, doc);
						}
					}
				}
			}
		}
	}

	recogida de devolución;
}

función eliminar (elem, selector, keepData) {
	var nodo,
		nodos = selector? jQuery.filter (selector, elem): elem,
		i = 0;

	para (; (nodo = nodos [i])! = nulo; i ++) {
		if (! keepData && node.nodeType === 1) {
			jQuery.cleanData (getAll (nodo));
		}

		if (node.parentNode) {
			if (keepData && isAttached (node)) {
				setGlobalEval (getAll (nodo, "secuencia de comandos"));
			}
			node.parentNode.removeChild (nodo);
		}
	}

	return elem;
}

jQuery.extend ({
	htmlPrefilter: function (html) {
		return html;
	},

	clon: function (elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clon = elem.cloneNode (verdadero),
			inPage = isAttached (elem);

		// Solucionar problemas de clonación de IE
		if (! support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				! jQuery.isXMLDoc (elem)) {

			// Aquí evitamos Sizzle por motivos de rendimiento: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (clonar);
			srcElements = getAll (elem);

			para (i = 0, l = srcElements.length; i <l; i ++) {
				fixInput (srcElements [i], destElements [i]);
			}
		}

		// Copia los eventos del original al clon
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (elem);
				destElements = destElements || getAll (clonar);

				para (i = 0, l = srcElements.length; i <l; i ++) {
					cloneCopyEvent (srcElements [i], destElements [i]);
				}
			} más {
				cloneCopyEvent (elem, clon);
			}
		}

		// Conservar el historial de evaluación del script
		destElements = getAll (clon, "script");
		if (destElements.length> 0) {
			setGlobalEval (destElements,! inPage && getAll (elem, "script"));
		}

		// Devuelve el conjunto clonado
		volver clon;
	},

	cleanData: function (elems) {
		var datos, elem, tipo,
			especial = jQuery.event.special,
			i = 0;

		para (; (elem = elems [i])! == indefinido; i ++) {
			if (acceptData (elem)) {
				if ((data = elem [dataPriv.expando])) {
					if (data.events) {
						para (escriba data.events) {
							if (especial [tipo]) {
								jQuery.event.remove (elem, tipo);

							// Este es un atajo para evitar la sobrecarga de jQuery.event.remove
							} más {
								jQuery.removeEvent (elem, tipo, data.handle);
							}
						}
					}

					// Soporte: Chrome <= 35 - 45+
					// Asignar indefinido en lugar de usar eliminar, ver Data # remove
					elem [dataPriv.expando] = indefinido;
				}
				if (elem [dataUser.expando]) {

					// Soporte: Chrome <= 35 - 45+
					// Asignar indefinido en lugar de usar eliminar, ver Data # remove
					elem [dataUser.expando] = indefinido;
				}
			}
		}
	}
});

jQuery.fn.extend ({
	separar: función (selector) {
		return eliminar (esto, selector, verdadero);
	},

	eliminar: función (selector) {
		volver eliminar (este, selector);
	},

	texto: función (valor) {
		acceso de retorno (esto, función (valor) {
			valor de retorno === indefinido?
				jQuery.text (esto):
				this.empty (). each (function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = valor;
					}
				});
		}, nulo, valor, argumentos.longitud);
	},

	añadir: función () {
		return domManip (esto, argumentos, función (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (esto, elem);
				target.appendChild (elem);
			}
		});
	},

	anteponer: function () {
		return domManip (esto, argumentos, función (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (esto, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	},

	antes: function () {
		return domManip (esto, argumentos, función (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, esto);
			}
		});
	},

	después: function () {
		return domManip (esto, argumentos, función (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	},

	vacío: función () {
		var elem,
			i = 0;

		para (; (elem = this [i])! = null; i ++) {
			if (elem.nodeType === 1) {

				// Evita pérdidas de memoria
				jQuery.cleanData (getAll (elem, false));

				// Elimina los nodos restantes
				elem.textContent = "";
			}
		}

		devuelve esto;
	},

	clon: function (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null? falso: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? dataAndEvents: deepDataAndEvents;

		return this.map (function () {
			return jQuery.clone (esto, dataAndEvents, deepDataAndEvents);
		});
	},

	html: función (valor) {
		acceso de retorno (esto, función (valor) {
			var elem = esto [0] || {},
				i = 0,
				l = esta.longitud;

			if (valor === indefinido && elem.nodeType === 1) {
				return elem.innerHTML;
			}

			// Veamos si podemos tomar un atajo y usar innerHTML
			if (typeof value === "string" &&! rnoInnerhtml.test (value) &&
				! wrapMap [(rtagName.exec (valor) || ["", ""]) [1] .toLowerCase ()]) {

				valor = jQuery.htmlPrefilter (valor);

				tratar {
					para (; i <l; i ++) {
						elem = esto [i] || {};

						// Eliminar nodos de elementos y evitar pérdidas de memoria
						if (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = valor;
						}
					}

					elem = 0;

				// Si el uso de innerHTML arroja una excepción, use el método de reserva
				} captura (e) {}
			}

			si (elem) {
				this.empty (). append (valor);
			}
		}, nulo, valor, argumentos.longitud);
	},

	replaceWith: function () {
		var ignorado = [];

		// Realice los cambios, reemplazando cada elemento de contexto no ignorado con el nuevo contenido
		return domManip (esto, argumentos, función (elem) {
			var parent = this.parentNode;

			if (jQuery.inArray (esto, ignorado) <0) {
				jQuery.cleanData (getAll (esto));
				if (padre) {
					parent.replaceChild (elem, esto);
				}
			}

		// Forzar invocación de devolución de llamada
		}, ignorado);
	}
});

jQuery.each ({
	appendTo: "agregar",
	prependTo: "anteponer",
	insertBefore: "antes",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, función (nombre, original) {
	jQuery.fn [nombre] = función (selector) {
		var elems,
			ret = [],
			insert = jQuery (selector),
			last = insert.length - 1,
			i = 0;

		para (; i <= último; i ++) {
			elems = i === último? esto: esto.clon (verdadero);
			jQuery (insertar [i]) [original] (elems);

			// Soporte: Android <= 4.0 solamente, solo PhantomJS 1
			// .get () porque push.apply (_, arraylike) arroja un WebKit antiguo
			push.apply (ret, elems.get ());
		}

		return this.pushStack (ret);
	};
});
var rnumnonpx = new RegExp ("^ (" + pnum + ") (?! px) [az%] + $", "i");

var getStyles = function (elem) {

		// Soporte: IE <= 11 solamente, Firefox <= 30 (# 15098, # 14150)
		// IE lanza elementos creados en ventanas emergentes
		// FF mientras tanto arroja elementos del marco a través de "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (! view ||! view.opener) {
			ver = ventana;
		}

		return view.getComputedStyle (elem);
	};

var swap = function (elem, options, callback) {
	var ret, nombre,
		antiguo = {};

	// Recuerda los valores antiguos e inserta los nuevos
	para (nombre en opciones) {
		antiguo [nombre] = elem.style [nombre];
		elem.style [nombre] = opciones [nombre];
	}

	ret = callback.call (elem);

	// Revertir los valores antiguos
	para (nombre en opciones) {
		elem.style [nombre] = antiguo [nombre];
	}

	return ret;
};


var rboxStyle = new RegExp (cssExpand.join ("|"), "i");



(función () {

	// La ejecución de las pruebas pixelPosition y boxSizingReliable solo requieren un diseño
	// para que se ejecuten al mismo tiempo para guardar el segundo cálculo.
	function computeStyleTests () {

		// Este es un singleton, necesitamos ejecutarlo solo una vez
		if (! div) {
			regreso;
		}

		container.style.cssText = "posición: absoluta; izquierda: -11111px; ancho: 60px;" +
			"margin-top: 1px; padding: 0; border: 0";
		div.style.cssText =
			"posición: relativa; pantalla: bloque; tamaño del cuadro: cuadro del borde; desbordamiento: desplazamiento;" +
			"margen: automático; borde: 1 px; relleno: 1 px;" +
			"ancho: 60%; superior: 1%";
		documentElement.appendChild (contenedor) .appendChild (div);

		var divStyle = window.getComputedStyle (div);
		pixelPositionVal = divStyle.top! == "1%";

		// Soporte: Android 4.0 - 4.3 solamente, Firefox <= 3 - 44
		confiableMarginLeftVal = roundPixelMeasures (divStyle.marginLeft) === 12;

		// Soporte: Android 4.0 - 4.3 solamente, Safari <= 9.1 - 10.1, iOS <= 7.0 - 9.3
		// Algunos estilos regresan con valores porcentuales, aunque no deberían
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures (divStyle.right) === 36;

		// Soporte: IE 9-11 solamente
		// Detectar informes erróneos de dimensiones de contenido para tamaño de caja: elementos de caja de borde
		boxSizingReliableVal = roundPixelMeasures (divStyle.width) === 36;

		// Soporte: solo IE 9
		// Detectar desbordamiento: desorden de desplazamiento (gh-3699)
		// Soporte: Chrome <= 64
		// No se deje engañar cuando el zoom afecte a offsetWidth (gh-4029)
		div.style.position = "absoluto";
		scrollboxSizeVal = roundPixelMeasures (div.offsetWidth / 3) === 12;

		documentElement.removeChild (contenedor);

		// Anula el div para que no se almacene en la memoria y
		// también será una señal de que verificaciones ya realizadas
		div = nulo;
	}

	function roundPixelMeasures (medida) {
		return Math.round (parseFloat (medida));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		confiableTrDimensionesVal, confiableMarginLeftVal,
		contenedor = document.createElement ("div"),
		div = document.createElement ("div");

	// Termine temprano en entornos limitados (sin navegador)
	if (! div.style) {
		regreso;
	}

	// Soporte: IE <= 9 - 11 solamente
	// El estilo del elemento clonado afecta al elemento fuente clonado (# 8908)
	div.style.backgroundClip = "cuadro de contenido";
	div.cloneNode (verdadero) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "cuadro de contenido";

	jQuery.extend (apoyo, {
		boxSizingReliable: function () {
			computeStyleTests ();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function () {
			computeStyleTests ();
			return pixelBoxStylesVal;
		},
		pixelPosition: function () {
			computeStyleTests ();
			return pixelPositionVal;
		},
		confiableMarginLeft: function () {
			computeStyleTests ();
			return confiableMarginLeftVal;
		},
		scrollboxSize: function () {
			computeStyleTests ();
			return scrollboxSizeVal;
		},

		// Soporte: IE 9 - 11+, Edge 15 - 18+
		// Informe erróneo de IE / Edge `getComputedStyle` de filas de tabla con ancho / alto
		// establecido en CSS mientras que las propiedades ʻoffset * `informan los valores correctos.
		// El comportamiento en IE 9 es más sutil que en las versiones más nuevas y pasa
		// algunas versiones de esta prueba; ¡asegúrate de no hacerlo pasar allí!
		confiableTrDimensiones: función () {
			var table, tr, trChild, trStyle;
			if (confiableTrDimensionsVal == null) {
				tabla = document.createElement ("tabla");
				tr = document.createElement ("tr");
				trChild = document.createElement ("div");

				table.style.cssText = "posición: absoluta; izquierda: -11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild (tabla)
					.appendChild (tr)
					.appendChild (trChild);

				trStyle = window.getComputedStyle (tr);
				confiableTrDimensionesVal = parseInt (trStyle.height)> 3;

				documentElement.removeChild (tabla);
			}
			return confiableTrDimensionsVal;
		}
	});
}) ();


función curCSS (elem, nombre, calculado) {
	var width, minWidth, maxWidth, ret,

		// Soporte: Firefox 51+
		// Recuperando el estilo antes de calcularlo de alguna manera
		// soluciona un problema al obtener valores incorrectos
		// en elementos separados
		estilo = elem.style;

	calculado = calculado || getStyles (elem);

	// getPropertyValue es necesario para:
	// .css ('filtro') (solo IE 9, # 12537)
	// .css ('- propiedad personalizada) (# 3144)
	if (calculado) {
		ret = computed.getPropertyValue (nombre) || calculado [nombre];

		if (ret === "" &&! isAttached (elem)) {
			ret = jQuery.style (elem, nombre);
		}

		// Un tributo al "increíble truco de Dean Edwards"
		// El navegador de Android devuelve un porcentaje para algunos valores,
		// pero el ancho parece ser píxeles confiables.
		// Esto va en contra de la especificación preliminar de CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if (! support.pixelBoxStyles () && rnumnonpx.test (ret) && rboxStyle.test (nombre)) {

			// Recuerda los valores originales
			ancho = estilo.ancho;
			minWidth = style.minWidth;
			maxWidth = estilo.maxWidth;

			// Ingrese los nuevos valores para obtener un valor calculado
			style.minWidth = style.maxWidth = style.width = ret;
			ret = ancho calculado;

			// Revertir los valores cambiados
			style.width = ancho;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret! == undefined?

		// Soporte: IE <= 9 - 11 solamente
		// IE devuelve el valor zIndex como un número entero.
		ret + "":
		retirado;
}


function addGetHookIf (conditionFn, hookFn) {

	// Defina el gancho, comprobaremos en la primera ejecución si es realmente necesario.
	regreso {
		obtener: function () {
			if (conditionFn ()) {

				// No se necesita gancho (o no es posible usarlo debido
				// a la dependencia faltante), elimínela.
				eliminar this.get;
				regreso;
			}

			// Gancho necesario; redefinirlo para que la prueba de soporte no se vuelva a ejecutar.
			return (this.get = hookFn) .apply (esto, argumentos);
		}
	};
}


var cssPrefixes = ["Webkit", "Moz", "ms"],
	emptyStyle = document.createElement ("div") .style,
	vendorProps = {};

// Devuelve una propiedad con prefijo de proveedor o indefinida
function vendorPropName (nombre) {

	// Compruebe los nombres con prefijo del proveedor
	var capName = nombre [0] .toUpperCase () + nombre.slice (1),
		i = cssPrefixes.length;

	mientras yo-- ) {
		nombre = cssPrefixes [i] + capName;
		if (nombre en estilo vacío) {
			nombre de retorno;
		}
	}
}

// Devuelve una propiedad con prefijo jQuery.cssProps o proveedor potencialmente mapeada
function finalPropName (nombre) {
	var final = jQuery.cssProps [nombre] || vendorProps [nombre];

	if (final) {
		retorno final;
	}
	if (nombre en estilo vacío) {
		nombre de retorno;
	}
	return vendorProps [nombre] = vendorPropName (nombre) || nombre;
}


var

	// Intercambiable si la pantalla no es ninguna o comienza con una tabla
	// excepto "table", "table-cell" o "table-caption"
	// Consulte aquí los valores de visualización: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = / ^ - /,
	cssShow = {posición: "absoluta", visibilidad: "oculta", pantalla: "bloque"},
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber (_elem, value, subtract) {

	// Cualquier valor relativo (+/-) ya ha sido
	// normalizado en este punto
	var coincide con rcssNum.exec (valor);
	devolver partidos?

		// Protegerse contra "restar" indefinido, por ejemplo, cuando se usa como en cssHooks
		Math.max (0, coincide con [2] - (restar || 0)) + (coincide con [3] || "px"):
		valor;
}

function boxModelAdjustment (elem, dimension, box, isBorderBox, styles, computedVal) {
	var i = dimension === "ancho"? 1: 0,
		extra = 0,
		delta = 0;

	// El ajuste puede no ser necesario
	if (box === (isBorderBox? "border": "content")) {
		return 0;
	}

	para (; i <4; i + = 2) {

		// Ambos modelos de caja excluyen el margen
		if (casilla === "margen") {
			delta + = jQuery.css (elem, caja + cssExpand [i], verdadero, estilos);
		}

		// Si llegamos aquí con un cuadro de contenido, buscamos "relleno" o "borde" o "margen"
		if (! isBorderBox) {

			// Agregar relleno
			delta + = jQuery.css (elem, "relleno" + cssExpand [i], verdadero, estilos);

			// Para "borde" o "margen", agregue borde
			if (box! == "padding") {
				delta + = jQuery.css (elem, "borde" + cssExpand [i] + "Ancho", verdadero, estilos);

			// Pero aún manténgase al tanto de ello
			} más {
				extra + = jQuery.css (elem, "borde" + cssExpand [i] + "Ancho", verdadero, estilos);
			}

		// Si llegamos aquí con un cuadro de borde (contenido + relleno + borde), estamos buscando "contenido" o
		// "relleno" o "margen"
		} más {

			// Para "contenido", reste el relleno
			if (casilla === "contenido") {
				delta - = jQuery.css (elem, "relleno" + cssExpand [i], verdadero, estilos);
			}

			// Para "contenido" o "relleno", resta el borde
			if (box! == "margin") {
				delta - = jQuery.css (elem, "borde" + cssExpand [i] + "Ancho", verdadero, estilos);
			}
		}
	}

	// Tenga en cuenta el margen de desplazamiento del cuadro de contenido positivo cuando se solicite proporcionando computedVal
	if (! isBorderBox && computedVal> = 0) {

		// offsetWidth / offsetHeight es una suma redondeada de contenido, relleno, margen de desplazamiento y borde
		// Suponiendo un canal de desplazamiento entero, reste el resto y redondee hacia abajo
		delta + = Math.max (0, Math.ceil (
			elem ["desplazamiento" + dimensión [0] .toUpperCase () + dimension.slice (1)] -
			computedVal -
			delta -
			extra -
			0,5

		// Si se desconoce offsetWidth / offsetHeight, entonces no podemos determinar el margen de desplazamiento del cuadro de contenido
		// Usa un cero explícito para evitar NaN (gh-3964)
		)) || 0;
	}

	return delta;
}

function getWidthOrHeight (elem, dimension, extra) {

	// Empezar con estilo calculado
	var styles = getStyles (elem),

		// Para evitar forzar un reflujo, solo busque boxSizing si lo necesitamos (gh-4322).
		// Cuadro de contenido falso hasta que sepamos que es necesario para conocer el valor real.
		boxSizingNeeded =! support.boxSizingReliable () || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css (elem, "boxSizing", false, styles) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS (elem, dimensión, estilos),
		offsetProp = "offset" + dimensión [0] .toUpperCase () + dimension.slice (1);

	// Soporte: Firefox <= 54
	// Devuelve un valor confuso que no sea de píxeles o finge ignorancia, según corresponda.
	if (rnumnonpx.test (val)) {
		if (! extra) {
			return val;
		}
		val = "auto";
	}


	// Soporte: IE 9-11 solamente
	// Use offsetWidth / offsetHeight cuando el tamaño de la caja no sea confiable.
	// En esos casos, se puede confiar en que el valor calculado sea border-box.
	if ((! support.boxSizingReliable () && isBorderBox ||

		// Soporte: IE 10 - 11+, Edge 15 - 18+
		// Informe erróneo de IE / Edge `getComputedStyle` de filas de tabla con ancho / alto
		// establecido en CSS mientras que las propiedades ʻoffset * `informan los valores correctos.
		// Curiosamente, en algunos casos, IE 9 no sufre este problema.
		! support.reliableTrDimensions () && nodeName (elem, "tr") ||

		// Volver a offsetWidth / offsetHeight cuando el valor es "auto"
		// Esto sucede para elementos en línea sin una configuración explícita (gh-3571)
		val === "auto" ||

		// Soporte: Android <= 4.1 - 4.3 solamente
		// También use offsetWidth / offsetHeight para las dimensiones en línea mal informadas (gh-3602)
		! parseFloat (val) && jQuery.css (elem, "display", false, styles) === "en línea") &&

		// Asegúrate de que el elemento esté visible y conectado
		elem.getClientRects (). length) {

		isBorderBox = jQuery.css (elem, "boxSizing", false, styles) === "border-box";

		// Donde esté disponible, offsetWidth / offsetHeight dimensiones aproximadas del cuadro del borde.
		// Donde no esté disponible (por ejemplo, SVG), suponga un tamaño de caja poco confiable e interprete el
		// valor recuperado como dimensión del cuadro de contenido.
		valueIsBorderBox = offsetProp in elem;
		if (valueIsBorderBox) {
			val = elem [offsetProp];
		}
	}

	// Normalizar "" y auto
	val = parseFloat (val) || 0;

	// Ajuste para el modelo de caja del elemento
	retorno (val +
		boxModelAdjustment (
			elem,
			dimensión,
			extra || (isBorderBox? "border": "content"),
			valueIsBorderBox,
			estilos

			// Proporcione el tamaño calculado actual para solicitar el cálculo del margen de desplazamiento (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend ({

	// Agrega ganchos de propiedad de estilo para anular el valor predeterminado
	// comportamiento de obtener y establecer una propiedad de estilo
	cssHooks: {
		opacidad: {
			get: function (elem, computed) {
				if (calculado) {

					// Siempre debemos recuperar un número de la opacidad
					var ret = curCSS (elem, "opacidad");
					return ret === ""? "1": ret;
				}
			}
		}
	},

	// No agregue automáticamente "px" a estas propiedades posiblemente sin unidades
	cssNumber: {
		"animationIterationCount": verdadero,
		"columnCount": verdadero,
		"fillOpacity": verdadero,
		"flexGrow": verdadero,
		"flexShrink": verdadero,
		"fontWeight": verdadero,
		"gridArea": ​​verdadero,
		"gridColumn": verdadero,
		"gridColumnEnd": verdadero,
		"gridColumnStart": verdadero,
		"gridRow": verdadero,
		"gridRowEnd": verdadero,
		"gridRowStart": verdadero,
		"lineHeight": verdadero,
		"opacidad": verdadero,
		"orden": verdadero,
		"huérfanos": cierto,
		"viudas": cierto,
		"zIndex": verdadero,
		"zoom": verdadero
	},

	// Agregue propiedades cuyos nombres desee corregir antes
	// establecer u obtener el valor
	cssProps: {},

	// Obtener y establecer la propiedad de estilo en un nodo DOM
	estilo: función (elem, nombre, valor, extra) {

		// No establezca estilos en los nodos de texto y comentarios
		if (! elem || elem.nodeType === 3 || elem.nodeType === 8 ||! elem.style) {
			regreso;
		}

		// Asegúrate de trabajar con el nombre correcto
		var ret, tipo, ganchos,
			origName = camelCase (nombre),
			isCustomProp = rcustomProp.test (nombre),
			estilo = elem.style;

		// Asegúrate de que estamos trabajando con el nombre correcto. Nosotros no
		// desea consultar el valor si es una propiedad personalizada de CSS
		// ya que están definidos por el usuario.
		if (! isCustomProp) {
			nombre = finalPropName (origName);
		}

		// Obtiene el gancho para la versión con prefijo, luego la versión sin prefijo
		hooks = jQuery.cssHooks [nombre] || jQuery.cssHooks [origName];

		// Verifica si estamos configurando un valor
		if (value! == undefined) {
			tipo = tipo de valor;

			// Convertir "+ =" o "- =" a números relativos (# 7345)
			if (escriba === "cadena" && (ret = rcssNum.exec (valor)) && ret [1]) {
				valor = ajustarCSS (elem, nombre, ret);

				// Corrige el error # 9237
				tipo = "número";
			}

			// Asegúrese de que los valores nulos y NaN no estén configurados (# 7116)
			si (valor == nulo || valor! == valor) {
				regreso;
			}

			// Si se pasó un número, agregue la unidad (excepto para ciertas propiedades CSS)
			// La comprobación isCustomProp se puede eliminar en jQuery 4.0 cuando solo agregamos automáticamente
			// "px" a algunos valores codificados.
			if (escriba === "número" &&! isCustomProp) {
				valor + = ret && ret [3] || (jQuery.cssNumber [origName]? "": "px");
			}

			// background- * los accesorios afectan los valores del clon original
			if (! support.clearCloneStyle && value === "" && name.indexOf ("background") === 0) {
				estilo [nombre] = "heredar";
			}

			// Si se proporcionó un gancho, use ese valor; de lo contrario, simplemente establezca el valor especificado
			if (! hooks ||! ("set" in hooks) ||
				(valor = hooks.set (elem, valor, extra))! == indefinido) {

				if (isCustomProp) {
					style.setProperty (nombre, valor);
				} más {
					estilo [nombre] = valor;
				}
			}

		} más {

			// Si se proporcionó un gancho, obtenga el valor no calculado de allí
			if (hooks && "get" in hooks &&
				(ret = hooks.get (elem, false, extra))! == indefinido) {

				return ret;
			}

			// De lo contrario, obtenga el valor del objeto de estilo
			estilo de retorno [nombre];
		}
	},

	css: function (elem, name, extra, styles) {
		var val, num, ganchos,
			origName = camelCase (nombre),
			isCustomProp = rcustomProp.test (nombre);

		// Asegúrate de que estamos trabajando con el nombre correcto. Nosotros no
		// desea modificar el valor si es una propiedad personalizada de CSS
		// ya que están definidos por el usuario.
		if (! isCustomProp) {
			nombre = finalPropName (origName);
		}

		// Prueba el nombre con prefijo seguido del nombre sin prefijo
		hooks = jQuery.cssHooks [nombre] || jQuery.cssHooks [origName];

		// Si se proporcionó un gancho, obtenga el valor calculado desde allí
		if (hooks && "get" in hooks) {
			val = hooks.get (elem, true, extra);
		}

		// De lo contrario, si existe una forma de obtener el valor calculado, use ese
		if (val === undefined) {
			val = curCSS (elem, nombre, estilos);
		}

		// Convertir "normal" en valor calculado
		if (val === "normal" && nombre en cssNormalTransform) {
			val = cssNormalTransform [nombre];
		}

		// Hacer numérico si se proporcionó un calificador o forzado y val parece numérico
		if (extra === "" || extra) {
			num = parseFloat (val);
			devuelve extra === verdadero || isFinite (num)? num || 0: val;
		}

		return val;
	}
});

jQuery.each (["altura", "ancho"], función (_i, dimensión) {
	jQuery.cssHooks [dimensión] = {
		get: function (elem, computed, extra) {
			if (calculado) {

				// Ciertos elementos pueden tener información de dimensión si los mostramos de manera invisible
				// pero debe tener un estilo de visualización actual que se beneficie
				return rdisplayswap.test (jQuery.css (elem, "display")) &&

					// Soporte: Safari 8+
					// Las columnas de la tabla en Safari tienen un offsetWidth distinto de cero y cero
					// getBoundingClientRect (). width a menos que se cambie la visualización.
					// Soporte: IE <= 11 solamente
					// Ejecutando getBoundingClientRect en un nodo desconectado
					// en IE arroja un error.
					(! elem.getClientRects (). longitud ||! elem.getBoundingClientRect (). ancho)?
						swap (elem, cssShow, function () {
							return getWidthOrHeight (elem, dimensión, extra);
						}):
						getWidthOrHeight (elem, dimensión, extra);
			}
		},

		set: function (elem, value, extra) {
			var coincide,
				styles = getStyles (elem),

				// Leer styles.position solo si la prueba tiene la posibilidad de fallar
				// para evitar forzar un reflujo.
				scrollboxSizeBuggy =! support.scrollboxSize () &&
					styles.position === "absoluto",

				// Para evitar forzar un reflujo, solo busque boxSizing si lo necesitamos (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css (elem, "boxSizing", false, styles) === "border-box",
				restar = extra?
					boxModelAdjustment (
						elem,
						dimensión,
						extra,
						isBorderBox,
						estilos
					):
					0;

			// Considere las dimensiones del cuadro de borde no confiables comparando el desplazamiento * con el calculado y
			// falsificando un cuadro de contenido para obtener borde y relleno (gh-3699)
			if (isBorderBox && scrollboxSizeBuggy) {
				restar - = Math.ceil (
					elem ["desplazamiento" + dimensión [0] .toUpperCase () + dimension.slice (1)] -
					parseFloat (estilos [dimensión]) -
					boxModelAdjustment (elemento, dimensión, "borde", falso, estilos) -
					0,5
				);
			}

			// Convertir a píxeles si es necesario ajustar el valor
			if (restar && (coincide con rcssNum.exec (valor)) &&
				(coincide con [3] || "px")! == "px") {

				elem.style [dimensión] = valor;
				valor = jQuery.css (elem, dimensión);
			}

			return setPositiveNumber (elem, valor, restar);
		}
	};
});

jQuery.cssHooks.marginLeft = addGetHookIf (support.reliableMarginLeft,
	function (elem, calculado) {
		if (calculado) {
			return (parseFloat (curCSS (elem, "marginLeft")) ||
				elem.getBoundingClientRect (). izquierda -
					swap (elem, {marginLeft: 0}, function () {
						return elem.getBoundingClientRect (). left;
					})
				) + "px";
		}
	}
);

// Estos ganchos son utilizados por animate para expandir propiedades
jQuery.each ({
	margen: "",
	relleno: "",
	ancho del borde"
}, función (prefijo, sufijo) {
	jQuery.cssHooks [prefijo + sufijo] = {
		expandir: función (valor) {
			var i = 0,
				expandido = {},

				// Asume un solo número si no una cadena
				partes = tipo de valor === "cadena"? value.split (""): [valor];

			para (; i <4; i ++) {
				expandido [prefijo + cssExpand [i] + sufijo] =
					partes [i] || partes [i - 2] || partes [0];
			}

			retorno expandido;
		}
	};

	if (prefijo! == "margen") {
		jQuery.cssHooks [prefijo + sufijo] .set = setPositiveNumber;
	}
});

jQuery.fn.extend ({
	css: function (nombre, valor) {
		return access (this, function (elem, name, value) {
			var estilos, len,
				mapa = {},
				i = 0;

			if (Array.isArray (nombre)) {
				estilos = getStyles (elem);
				len = name.length;

				para (; i <len; i ++) {
					mapa [nombre [i]] = jQuery.css (elem, nombre [i], falso, estilos);
				}

				mapa de retorno;
			}

			valor de retorno! == indefinido?
				jQuery.style (elemento, nombre, valor):
				jQuery.css (elem, nombre);
		}, nombre, valor, argumentos.longitud> 1);
	}
});


función Tween (elem, opciones, prop, end, easing) {
	return new Tween.prototype.init (elem, options, prop, end, easing);
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function (elem, options, prop, end, easing, unit) {
		this.elem = elem;
		this.prop = prop;
		this.easing = suavizando || jQuery.easing._default;
		this.options = opciones;
		this.start = this.now = this.cur ();
		this.end = final;
		this.unit = unidad || (jQuery.cssNumber [prop]? "": "px");
	},
	cur: function () {
		var hooks = Tween.propHooks [this.prop];

		devolver ganchos && hooks.get?
			hooks.get (esto):
			Tween.propHooks._default.get (esto);
	},
	ejecutar: función (porcentaje) {
		var aliviado,
			ganchos = Tween.propHooks [this.prop];

		if (this.options.duration) {
			this.pos = eased = jQuery.easing [this.easing] (
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} más {
			this.pos = eased = porcentaje;
		}
		this.now = (this.end - this.start) * eased + this.start;

		if (this.options.step) {
			this.options.step.call (this.elem, this.now, this);
		}

		if (ganchos && hooks.set) {
			hooks.set (esto);
		} más {
			Tween.propHooks._default.set (esto);
		}
		devuelve esto;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_defecto: {
		obtener: función (interpolación) {
			var result;

			// Usa una propiedad en el elemento directamente cuando no es un elemento DOM,
			// o cuando no existe una propiedad de estilo coincidente.
			if (tween.elem.nodeType! == 1 ||
				tween.elem [tween.prop]! = null && tween.elem.style [tween.prop] == null) {
				return tween.elem [tween.prop];
			}

			// Pasar una cadena vacía como tercer parámetro a .css automáticamente
			// intenta un parseFloat y recurre a una cadena si el análisis falla.
			// Los valores simples como "10px" se analizan como Float;
			// Los valores complejos como "rotate (1rad)" se devuelven tal cual.
			resultado = jQuery.css (tween.elem, tween.prop, "");

			// Las cadenas vacías, nulas, indefinidas y "auto" se convierten a 0.
			retorno! resultado || resultado === "auto"? 0: resultado;
		},
		set: function (interpolación) {

			// Utilice el gancho de paso para compatibilidad trasera.
			// Usa cssHook si está ahí.
			// Use .style si está disponible y use propiedades simples cuando estén disponibles.
			if (jQuery.fx.step [tween.prop]) {
				jQuery.fx.step [tween.prop] (interpolación);
			} else if (tween.elem.nodeType === 1 && (
					jQuery.cssHooks [tween.prop] ||
					tween.elem.style [finalPropName (tween.prop)]! = null)) {
				jQuery.style (tween.elem, tween.prop, tween.now + tween.unit);
			} más {
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
};

// Soporte: IE <= 9 solamente
// Enfoque basado en el pánico para configurar cosas en nodos desconectados
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function (interpolación) {
		if (tween.elem.nodeType && tween.elem.parentNode) {
			tween.elem [tween.prop] = tween.now;
		}
	}
};

jQuery.easing = {
	lineal: función (p) {
		return p;
	},
	swing: function (p) {
		return 0.5 - Math.cos (p * Math.PI) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 punto de extensión
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = / ^ (?: alternar | mostrar | ocultar) $ /,
	rrun = / queueHooks $ /;

función horario () {
	if (inProgress) {
		if (document.hidden === false && window.requestAnimationFrame) {
			window.requestAnimationFrame (horario);
		} más {
			window.setTimeout (horario, jQuery.fx.interval);
		}

		jQuery.fx.tick ();
	}
}

// Las animaciones creadas sincrónicamente se ejecutarán sincrónicamente
function createFxNow () {
	window.setTimeout (function () {
		fxNow = indefinido;
	});
	return (fxNow = Date.now ());
}

// Genera parámetros para crear una animación estándar
function genFx (type, includeWidth) {
	var que,
		i = 0,
		attrs = {altura: tipo};

	// Si incluimos el ancho, el valor del paso es 1 para hacer todos los valores cssExpand,
	// de lo contrario, el valor del paso es 2 para omitir la izquierda y la derecha
	includeWidth = includeWidth? 1: 0;
	para (; i <4; i + = 2 - includeWidth) {
		que = cssExpand [i];
		attrs ["margin" + which] = attrs ["padding" + which] = tipo;
	}

	if (includeWidth) {
		attrs.opacity = attrs.width = tipo;
	}

	return attrs;
}

función createTween (valor, prop, animación) {
	var interpolación,
		colección = (Animation.tweeners [prop] || []) .concat (Animation.tweeners ["*"]),
		índice = 0,
		longitud = colección.longitud;
	para (; índice <longitud; índice ++) {
		if ((interpolación = colección [índice] .call (animación, prop, valor))) {

			// Hemos terminado con esta propiedad
			return tween;
		}
	}
}

function defaultPrefilter (elem, props, opts) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "ancho" en accesorios || "altura" en accesorios,
		anim = esto,
		orig = {},
		estilo = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree (elem),
		dataShow = dataPriv.get (elem, "fxshow");

	// Las animaciones de salto de cola secuestran los ganchos fx
	if (! opts.queue) {
		hooks = jQuery._queueHooks (elem, "fx");
		if (hooks.unqueued == null) {
			hooks.unqueued = 0;
			fuego viejo = hooks.empty.fire;
			hooks.empty.fire = function () {
				if (! hooks.unqueued) {
					fuego viejo ();
				}
			};
		}
		hooks.unqueued ++;

		anim.always (function () {

			// Asegúrese de que se llame al controlador completo antes de que se complete
			anim.always (function () {
				hooks.unqueued--;
				if (! jQuery.queue (elem, "fx") .length) {
					hooks.empty.fire ();
				}
			});
		});
	}

	// Detectar mostrar / ocultar animaciones
	for (prop en props) {
		valor = props [prop];
		if (rfxtypes.test (valor)) {
			eliminar accesorios [prop];
			alternar = alternar || valor === "alternar";
			if (valor === (¿oculto? "ocultar": "mostrar")) {

				// Finge estar oculto si esto es un "espectáculo" y
				// todavía hay datos de un show / hide detenido
				if (value === "mostrar" && dataShow && dataShow [prop]! == undefined) {
					oculto = verdadero;

				// Ignora todos los demás datos de mostrar / ocultar no operativos
				} más {
					Seguir;
				}
			}
			orig [prop] = dataShow && dataShow [prop] || jQuery.style (elem, prop);
		}
	}

	// Rescatar si se trata de una operación no operativa como .hide (). Hide ()
	propTween =! jQuery.isEmptyObject (props);
	if (! propTween && jQuery.isEmptyObject (orig)) {
		regreso;
	}

	// Restringir los estilos de "desbordamiento" y "visualización" durante las animaciones de cuadro
	if (isBox && elem.nodeType === 1) {

		// Soporte: IE <= 9 - 11, Edge 12 - 15
		// Registra los 3 atributos de desbordamiento porque IE no infiere la abreviatura
		// de overflowX y overflowY con valores idénticos y Edge solo refleja
		// el valor overflowX allí.
		opts.overflow = [style.overflow, style.overflowX, style.overflowY];

		// Identificar un tipo de visualización, prefiriendo mostrar / ocultar datos antiguos sobre la cascada CSS
		restoreDisplay = dataShow && dataShow.display;
		if (restoreDisplay == null) {
			restoreDisplay = dataPriv.get (elem, "pantalla");
		}
		display = jQuery.css (elem, "display");
		si (mostrar === "ninguno") {
			if (restoreDisplay) {
				display = restoreDisplay;
			} más {

				// Obtener valor (es) no vacío forzando temporalmente la visibilidad
				showHide ([elem], verdadero);
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css (elem, "display");
				showHide ([elem]);
			}
		}

		// Animar elementos en línea como bloque en línea
		if (display === "inline" || display === "inline-block" && restoreDisplay! = null) {
			if (jQuery.css (elem, "float") === "none") {

				// Restaurar el valor de visualización original al final de las animaciones de mostrar / ocultar puras
				if (! propTween) {
					anim.done (function () {
						style.display = restoreDisplay;
					});
					if (restoreDisplay == null) {
						display = style.display;
						restoreDisplay = display === "none"? "" : monitor;
					}
				}
				style.display = "bloque en línea";
			}
		}
	}

	if (opts.overflow) {
		style.overflow = "oculto";
		anim.always (function () {
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		});
	}

	// Implementar mostrar / ocultar animaciones
	propTween = falso;
	para (prop en orig) {

		// Configuración general de mostrar / ocultar para la animación de este elemento
		if (! propTween) {
			if (dataShow) {
				if ("oculto" en dataShow) {
					hidden = dataShow.hidden;
				}
			} más {
				dataShow = dataPriv.access (elem, "fxshow", {display: restoreDisplay});
			}

			// Almacenar oculto / visible para alternar de modo que `.stop (). Toggle ()` "invierte"
			if (alternar) {
				dataShow.hidden =! hidden;
			}

			// Mostrar elementos antes de animarlos
			si (oculto) {
				showHide ([elem], verdadero);
			}

			/ * eslint-disable no-loop-func * /

			anim.done (function () {

			/ * eslint-enable no-loop-func * /

				// El paso final de una animación "ocultar" es ocultar el elemento
				if (! hidden) {
					showHide ([elem]);
				}
				dataPriv.remove (elem, "fxshow");
				para (prop en orig) {
					jQuery.style (elem, prop, orig [prop]);
				}
			});
		}

		// Configuración por propiedad
		propTween = createTween (¿oculto? dataShow [prop]: 0, prop, anim);
		if (! (prop en dataShow)) {
			Mostrar datos [prop] = propTween.start;
			si (oculto) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter (props, specialEasing) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing y expand cssHook pass
	para (índice en accesorios) {
		nombre = camelCase (índice);
		easing = specialEasing [nombre];
		valor = props [índice];
		if (Array.isArray (valor)) {
			easing = value [1];
			valor = props [índice] = valor [0];
		}

		if (índice! == nombre) {
			props [nombre] = valor;
			eliminar accesorios [índice];
		}

		hooks = jQuery.cssHooks [nombre];
		if (ganchos && "expandir" en ganchos) {
			valor = hooks.expand (valor);
			eliminar accesorios [nombre];

			// No del todo $ .extend, esto no sobrescribirá las claves existentes.
			// Reutilizando 'índice' porque tenemos el "nombre" correcto
			para (índice en valor) {
				if (! (index in props)) {
					props [índice] = valor [índice];
					specialEasing [índice] = suavizado;
				}
			}
		} más {
			specialEasing [nombre] = suavizado;
		}
	}
}

función Animación (elem, propiedades, opciones) {
	resultado var,
		detenido,
		índice = 0,
		length = Animation.prefilters.length,
		diferido = jQuery.Deferred (). always (function () {

			// No coincide con elem en el selector animado
			eliminar tick.elem;
		}),
		tick = function () {
			if (detenido) {
				falso retorno;
			}
			var currentTime = fxNow || createFxNow (),
				restante = Math.max (0, animation.startTime + animation.duration - currentTime),

				// Soporte: solo Android 2.3
				// Error de bloqueo arcaico no nos permitirá usar `1 - (0.5 || 0)` (# 12497)
				temp = restante / animation.duration || 0,
				porcentaje = 1 - temperatura,
				índice = 0,
				length = animation.tweens.length;

			para (; índice <longitud; índice ++) {
				animation.tweens [índice] .run (porcentaje);
			}

			deferred.notifyWith (elem, [animación, porcentaje, restante]);

			// Si hay más por hacer, cede
			if (porcentaje <1 && longitud) {
				retorno restante;
			}

			// Si se trataba de una animación vacía, sintetiza una notificación de progreso final
			if (! length) {
				deferred.notifyWith (elem, [animation, 1, 0]);
			}

			// Resuelve la animación e informa su conclusión
			deferred.resolveWith (elem, [animation]);
			falso retorno;
		},
		animation = deferred.promise ({
			elem: elem,
			accesorios: jQuery.extend ({}, propiedades),
			opts: jQuery.extend (verdadero, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, opciones),
			originalProperties: propiedades,
			originalOptions: opciones,
			startTime: fxNow || createFxNow (),
			duración: opciones.duración,
			preadolescentes: [],
			createTween: function (prop, end) {
				var tween = jQuery.Tween (elem, animation.opts, prop, end,
						animation.opts.specialEasing [prop] || animation.opts.easing);
				animation.tweens.push (interpolación);
				return tween;
			},
			detener: función (gotoEnd) {
				var index = 0,

					// Si vamos al final, queremos ejecutar todos los preadolescentes
					// de lo contrario, saltamos esta parte
					length = gotoEnd? animation.tweens.length: 0;
				if (detenido) {
					devuelve esto;
				}
				detenido = verdadero;
				para (; índice <longitud; índice ++) {
					animation.tweens [índice] .run (1);
				}

				// Resolver cuando jugamos el último cuadro; de lo contrario, rechazar
				if (gotoEnd) {
					deferred.notifyWith (elem, [animation, 1, 0]);
					deferred.resolveWith (elem, [animation, gotoEnd]);
				} más {
					deferred.rejectWith (elem, [animation, gotoEnd]);
				}
				devuelve esto;
			}
		}),
		props = animation.props;

	propFilter (props, animation.opts.specialEasing);

	para (; índice <longitud; índice ++) {
		resultado = Animation.prefilters [index] .call (animation, elem, props, animation.opts);
		if (resultado) {
			if (isFunction (result.stop)) {
				jQuery._queueHooks (animation.elem, animation.opts.queue) .stop =
					result.stop.bind (resultado);
			}
			devolver resultado;
		}
	}

	jQuery.map (props, createTween, animación);

	if (isFunction (animation.opts.start)) {
		animation.opts.start.call (elem, animación);
	}

	// Adjuntar devoluciones de llamada de opciones
	animación
		.progress (animation.opts.progress)
		.done (animation.opts.done, animation.opts.complete)
		.fail (animación.opts.fail)
		.always (animation.opts.always);

	jQuery.fx.timer (
		jQuery.extend (tick, {
			elem: elem,
			anim: animación,
			cola: animation.opts.queue
		})
	);

	devolver la animación;
}

jQuery.Animation = jQuery.extend (Animación, {

	tweeners: {
		"*": [función (prop, valor) {
			var tween = this.createTween (prop, valor);
			ajustarCSS (interpolación.elem, prop, rcssNum.exec (valor), interpolación);
			return tween;
		}]
	},

	tweener: function (props, callback) {
		if (isFunction (props)) {
			devolución de llamada = props;
			props = ["*"];
		} más {
			props = props.match (rnothtmlwhite);
		}

		var prop,
			índice = 0,
			length = props.length;

		para (; índice <longitud; índice ++) {
			prop = props [índice];
			Animation.tweeners [prop] = Animation.tweeners [prop] || [];
			Animation.tweeners [prop] .unshift (devolución de llamada);
		}
	},

	prefiltros: [defaultPrefilter],

	prefiltro: función (devolución de llamada, anteponer) {
		if (anteponer) {
			Animation.prefilters.unshift (devolución de llamada);
		} más {
			Animation.prefilters.push (devolución de llamada);
		}
	}
});

jQuery.speed = function (speed, easing, fn) {
	var opt = velocidad && tipo de velocidad === "objeto"? jQuery.extend ({}, velocidad): {
		completo: fn || ! fn && easing ||
			isFunction (velocidad) && velocidad,
		duración: velocidad,
		facilitación: fn && facilitación || suavizar &&! isFunction (suavizar) && suavizar
	};

	// Ir al estado final si fx están desactivados
	if (jQuery.fx.off) {
		opt.duration = 0;

	} más {
		if (typeof opt.duration! == "number") {
			if (opt.duration en jQuery.fx.speeds) {
				opt.duration = jQuery.fx.speeds [opt.duration];

			} más {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalizar opt.queue - true / undefined / null -> "fx"
	if (opt.queue == null || opt.queue === true) {
		opt.queue = "fx";
	}

	// Cola
	opt.old = opt.complete;

	opt.complete = function () {
		if (isFunction (opt.old)) {
			opt.old.call (esto);
		}

		if (opt.queue) {
			jQuery.dequeue (esto, opt.queue);
		}
	};

	return opt;
};

jQuery.fn.extend ({
	fadeTo: function (speed, to, easing, callback) {

		// Muestra los elementos ocultos después de establecer la opacidad en 0
		devuelve this.filter (isHiddenWithinTree) .css ("opacidad", 0) .show ()

			// Animar al valor especificado
			.end (). animate ({opacidad: a}, velocidad, suavizado, devolución de llamada);
	},
	animate: function (prop, speed, easing, callback) {
		var vacío = jQuery.isEmptyObject (prop),
			optall = jQuery.speed (velocidad, aceleración, devolución de llamada),
			doAnimation = function () {

				// Opere en una copia de la propiedad para que no se pierda la relajación por propiedad
				var anim = Animación (esto, jQuery.extend ({}, prop), optall);

				// Las animaciones vacías o el acabado se resuelve de inmediato
				if (vacío || dataPriv.get (esto, "finalizar")) {
					anim.stop (verdadero);
				}
			};
			doAnimation.finish = doAnimation;

		volver vacío || optall.queue === falso?
			this.each (doAnimation):
			this.queue (optall.queue, doAnimation);
	},
	detener: función (tipo, clearQueue, gotoEnd) {
		var stopQueue = function (hooks) {
			var stop = hooks.stop;
			eliminar hooks.stop;
			detener (gotoEnd);
		};

		if (typeof type! == "string") {
			gotoEnd = clearQueue;
			clearQueue = tipo;
			tipo = indefinido;
		}
		if (clearQueue) {
			this.queue (tipo || "fx", []);
		}

		devuelve this.each (function () {
			var dequeue = true,
				index = type! = null && type + "queueHooks",
				temporizadores = jQuery.timers,
				data = dataPriv.get (esto);

			if (índice) {
				if (datos [índice] && datos [índice] .stop) {
					stopQueue (datos [índice]);
				}
			} más {
				para (índice en datos) {
					if (datos [índice] && datos [índice] .stop && rrun.test (índice)) {
						stopQueue (datos [índice]);
					}
				}
			}

			for (index = timers.length; index--;) {
				if (temporizadores [índice] .elem === esto &&
					(tipo == nulo || temporizadores [índice] .queue === tipo)) {

					temporizadores [índice] .anim.stop (gotoEnd);
					dequeue = falso;
					timers.splice (índice, 1);
				}
			}

			// Iniciar el siguiente en la cola si el último paso no fue forzado.
			// Los temporizadores actualmente llamarán a sus devoluciones de llamada completas, que
			// se retirará de la cola, pero solo si fueron gotoEnd.
			if (quitar de la cola ||! gotoEnd) {
				jQuery.dequeue (este, tipo);
			}
		});
	},
	terminar: función (tipo) {
		if (escriba! == falso) {
			tipo = tipo || "fx";
		}
		devuelve this.each (function () {
			índice var,
				data = dataPriv.get (esto),
				cola = datos [tipo + "cola"],
				hooks = data [tipo + "queueHooks"],
				temporizadores = jQuery.timers,
				longitud = cola? queue.length: 0;

			// Habilitar marca de finalización en datos privados
			data.finish = verdadero;

			// Vacía la cola primero
			jQuery.queue (este, tipo, []);

			if (ganchos && hooks.stop) {
				hooks.stop.call (esto, verdadero);
			}

			// Busque las animaciones activas y termínelas
			for (index = timers.length; index--;) {
				if (temporizadores [índice] .elem === este && temporizadores [índice] .queue === tipo) {
					temporizadores [índice] .anim.stop (verdadero);
					timers.splice (índice, 1);
				}
			}

			// Busque las animaciones en la cola anterior y termínelas
			para (índice = 0; índice <longitud; índice ++) {
				if (cola [índice] && cola [índice] .finish) {
					cola [índice] .finish.call (esto);
				}
			}

			// Apagar la bandera de acabado
			eliminar data.finish;
		});
	}
});

jQuery.each (["alternar", "mostrar", "ocultar"], función (_i, nombre) {
	var cssFn = jQuery.fn [nombre];
	jQuery.fn [nombre] = función (velocidad, aceleración, devolución de llamada) {
		velocidad de retorno == nulo || typeof speed === "boolean"?
			cssFn.apply (esto, argumentos):
			this.animate (genFx (nombre, verdadero), velocidad, aceleración, devolución de llamada);
	};
});

// Genera atajos para animaciones personalizadas
jQuery.each ({
	slideDown: genFx ("mostrar"),
	slideUp: genFx ("ocultar"),
	slideToggle: genFx ("alternar"),
	fadeIn: {opacity: "show"},
	fadeOut: {opacidad: "ocultar"},
	fadeToggle: {opacity: "toggle"}
}, función (nombre, accesorios) {
	jQuery.fn [nombre] = función (velocidad, aceleración, devolución de llamada) {
		return this.animate (props, speed, easing, callback);
	};
});

jQuery.timers = [];
jQuery.fx.tick = function () {
	var temporizador,
		i = 0,
		temporizadores = jQuery.timers;

	fxNow = Date.now ();

	para (; i <timers.length; i ++) {
		temporizador = temporizadores [i];

		// Ejecute el temporizador y retírelo de forma segura cuando haya terminado (permitiendo la eliminación externa)
		if (! timer () && timers [i] === timer) {
			temporizadores.splice (i--, 1);
		}
	}

	if (! timers.length) {
		jQuery.fx.stop ();
	}
	fxNow = indefinido;
};

jQuery.fx.timer = función (temporizador) {
	jQuery.timers.push (temporizador);
	jQuery.fx.start ();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function () {
	if (inProgress) {
		regreso;
	}

	inProgress = true;
	calendario();
};

jQuery.fx.stop = function () {
	inProgress = null;
};

jQuery.fx.speeds = {
	lento: 600,
	rápido: 200,

	// Velocidad predeterminada
	_predeterminado: 400
};


// Basado en el complemento de Clint Helfers, con permiso.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function (tiempo, tipo) {
	tiempo = jQuery.fx? jQuery.fx.speeds [tiempo] || tiempo tiempo;
	tipo = tipo || "fx";

	return this.queue (tipo, función (siguiente, ganchos) {
		var timeout = window.setTimeout (siguiente, hora);
		hooks.stop = function () {
			window.clearTimeout (tiempo de espera);
		};
	});
};


(función () {
	var input = document.createElement ("entrada"),
		select = document.createElement ("seleccionar"),
		opt = select.appendChild (document.createElement ("opción"));

	input.type = "casilla de verificación";

	// Soporte: Android <= 4.3 solamente
	// El valor predeterminado para una casilla de verificación debe estar "activado"
	support.checkOn = input.value! == "";

	// Soporte: IE <= 11 solamente
	// Debe acceder a selectedIndex para seleccionar las opciones predeterminadas
	support.optSelected = opt.selected;

	// Soporte: IE <= 11 solamente
	// Una entrada pierde su valor después de convertirse en radio
	input = document.createElement ("entrada");
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
}) ();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend ({
	attr: function (nombre, valor) {
		acceso de retorno (esto, jQuery.attr, nombre, valor, argumentos.longitud> 1);
	},

	removeAttr: function (nombre) {
		devuelve this.each (function () {
			jQuery.removeAttr (este, nombre);
		});
	}
});

jQuery.extend ({
	attr: function (elem, name, value) {
		var ret, ganchos,
			nType = elem.nodeType;

		// No obtenga / establezca atributos en texto, comentarios y nodos de atributos
		if (nType === 3 || nType === 8 || nType === 2) {
			regreso;
		}

		// Retorno a la prop cuando los atributos no son compatibles
		if (typeof elem.getAttribute === "undefined") {
			return jQuery.prop (elem, nombre, valor);
		}

		// Los ganchos de atributos están determinados por la versión en minúsculas
		// Agarra el gancho necesario si hay uno definido
		if (nType! == 1 ||! jQuery.isXMLDoc (elem)) {
			hooks = jQuery.attrHooks [name.toLowerCase ()] ||
				(jQuery.expr.match.bool.test (nombre)? boolHook: undefined);
		}

		if (value! == undefined) {
			si (valor === nulo) {
				jQuery.removeAttr (elem, nombre);
				regreso;
			}

			if (hooks && "set" in hooks &&
				(ret = hooks.set (elem, valor, nombre))! == indefinido) {
				return ret;
			}

			elem.setAttribute (nombre, valor + "");
			valor de retorno;
		}

		if (hooks && "get" in hooks && (ret = hooks.get (elem, name))! == null) {
			return ret;
		}

		ret = jQuery.find.attr (elem, nombre);

		// Los atributos inexistentes devuelven nulo, normalizamos a indefinido
		return ret == null? indefinido: ret;
	},

	attrHooks: {
		tipo: {
			set: function (elem, value) {
				if (! support.radioValue && value === "radio" &&
					nodeName (elem, "entrada")) {
					var val = elem.value;
					elem.setAttribute ("tipo", valor);
					if (val) {
						elem.value = val;
					}
					valor de retorno;
				}
			}
		}
	},

	removeAttr: function (elem, value) {
		var nombre,
			i = 0,

			// Los nombres de los atributos pueden contener espacios en blanco que no sean HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match (rnothtmlwhite);

		if (attrNames && elem.nodeType === 1) {
			while ((name = attrNames [i ++])) {
				elem.removeAttribute (nombre);
			}
		}
	}
});

// Ganchos para atributos booleanos
boolHook = {
	set: function (elem, value, name) {
		si (valor === falso) {

			// Elimina los atributos booleanos cuando se establece en falso
			jQuery.removeAttr (elem, nombre);
		} más {
			elem.setAttribute (nombre, nombre);
		}
		nombre de retorno;
	}
};

jQuery.each (jQuery.expr.match.bool.source.match (/ \ w + / g), function (_i, name) {
	var getter = attrHandle [nombre] || jQuery.find.attr;

	attrHandle [nombre] = función (elem, nombre, isXML) {
		var ret, manejar,
			lowercaseName = name.toLowerCase ();

		if (! isXML) {

			// Evita un bucle infinito eliminando temporalmente esta función del getter
			handle = attrHandle [nombre en minúscula];
			attrHandle [nombre en minúscula] = ret;
			ret = getter (elem, nombre, isXML)! = null?
				nombre en minúscula:
				nulo;
			attrHandle [nombre en minúscula] = identificador;
		}
		return ret;
	};
});




var rfocusable = / ^ (?: entrada | seleccionar | área de texto | botón) $ / i,
	rclickable = / ^ (?: un | área) $ / i;

jQuery.fn.extend ({
	prop: function (nombre, valor) {
		acceso de retorno (esto, jQuery.prop, nombre, valor, argumentos.longitud> 1);
	},

	removeProp: function (nombre) {
		devuelve this.each (function () {
			eliminar este [jQuery.propFix [nombre] || nombre ];
		});
	}
});

jQuery.extend ({
	prop: function (elem, name, value) {
		var ret, ganchos,
			nType = elem.nodeType;

		// No obtener / establecer propiedades en nodos de texto, comentario y atributo
		if (nType === 3 || nType === 8 || nType === 2) {
			regreso;
		}

		if (nType! == 1 ||! jQuery.isXMLDoc (elem)) {

			// Arreglar nombre y adjuntar ganchos
			nombre = jQuery.propFix [nombre] || nombre;
			hooks = jQuery.propHooks [nombre];
		}

		if (value! == undefined) {
			if (hooks && "set" in hooks &&
				(ret = hooks.set (elem, valor, nombre))! == indefinido) {
				return ret;
			}

			return (elem [nombre] = valor);
		}

		if (hooks && "get" in hooks && (ret = hooks.get (elem, name))! == null) {
			return ret;
		}

		return elem [nombre];
	},

	propHooks: {
		tabIndex: {
			get: function (elem) {

				// Soporte: IE <= 9 - 11 solamente
				// elem.tabIndex no siempre devuelve el
				// valor correcto cuando no se ha establecido explícitamente
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Utilice la recuperación de atributos adecuada (# 12072)
				var tabindex = jQuery.find.attr (elem, "tabindex");

				if (tabindex) {
					return parseInt (tabindex, 10);
				}

				Si (
					rfocusable.test (elem.nodeName) ||
					rclickable.test (elem.nodeName) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"para": "htmlFor",
		"class": "className"
	}
});

// Soporte: IE <= 11 solamente
// Accediendo a la propiedad selectedIndex
// obliga al navegador a respetar la configuración seleccionada
// en la opción
// El captador asegura que se selecciona una opción predeterminada
// cuando en un optgroup
// La regla eslint "no-unused-expression" está deshabilitada para este código
// ya que considera tales accesiones noop
if (! support.optSelected) {
	jQuery.propHooks.selected = {
		get: function (elem) {

			/ * eslint expresiones-no-no-usadas: "off" * /

			var parent = elem.parentNode;
			if (parent && parent.parentNode) {
				parent.parentNode.selectedIndex;
			}
			devolver nulo;
		},
		conjunto: función (elem) {

			/ * eslint expresiones-no-no-usadas: "off" * /

			var parent = elem.parentNode;
			if (padre) {
				parent.selectedIndex;

				if (parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each ([
	"tabIndex",
	"solo lectura",
	"longitud máxima",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"Frontera del marco",
	"contentEditable"
], función () {
	jQuery.propFix [this.toLowerCase ()] = esto;
});




	// Elimina y contrae los espacios en blanco de acuerdo con las especificaciones de HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse (valor) {
		var tokens = value.match (rnothtmlwhite) || [];
		return tokens.join ("");
	}


function getClass (elem) {
	return elem.getAttribute && elem.getAttribute ("clase") || "";
}

function classesToArray (value) {
	if (Array.isArray (valor)) {
		valor de retorno;
	}
	if (typeof value === "string") {
		return value.match (rnothtmlwhite) || [];
	}
	regreso [];
}

jQuery.fn.extend ({
	addClass: function (value) {
		clases var, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if (isFunction (valor)) {
			devuelve esto.each (function (j) {
				jQuery (esto) .addClass (valor.call (esto, j, getClass (esto)));
			});
		}

		clases = classesToArray (valor);

		if (classes.length) {
			while ((elem = this [i ++])) {
				curValue = getClass (elem);
				cur = elem.nodeType === 1 && ("" + stripAndCollapse (curValue) + "");

				si (cur) {
					j = 0;
					while ((clazz = classes [j ++])) {
						if (cur.indexOf ("" + clazz + "") <0) {
							cur + = clazz + "";
						}
					}

					// Asigne solo si es diferente para evitar una renderización innecesaria.
					finalValue = stripAndCollapse (cur);
					if (curValue! == finalValue) {
						elem.setAttribute ("clase", finalValue);
					}
				}
			}
		}

		devuelve esto;
	},

	removeClass: function (value) {
		clases var, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if (isFunction (valor)) {
			devuelve esto.each (function (j) {
				jQuery (esto) .removeClass (valor.call (esto, j, getClass (esto)));
			});
		}

		if (! argumentos.longitud) {
			return this.attr ("clase", "");
		}

		clases = classesToArray (valor);

		if (classes.length) {
			while ((elem = this [i ++])) {
				curValue = getClass (elem);

				// Esta expresión está aquí para una mejor compresibilidad (ver addClass)
				cur = elem.nodeType === 1 && ("" + stripAndCollapse (curValue) + "");

				si (cur) {
					j = 0;
					while ((clazz = classes [j ++])) {

						// Eliminar * todas * las instancias
						while (cur.indexOf ("" + clazz + "")> -1) {
							cur = cur.replace ("" + clazz + "", "");
						}
					}

					// Asigne solo si es diferente para evitar una renderización innecesaria.
					finalValue = stripAndCollapse (cur);
					if (curValue! == finalValue) {
						elem.setAttribute ("clase", finalValue);
					}
				}
			}
		}

		devuelve esto;
	},

	toggleClass: function (value, stateVal) {
		var type = typeof value,
			isValidValue = tipo === "cadena" || Array.isArray (valor);

		if (typeof stateVal === "boolean" && isValidValue) {
			return stateVal? this.addClass (valor): this.removeClass (valor);
		}

		if (isFunction (valor)) {
			devuelve this.each (function (i) {
				jQuery (esto) .toggleClass (
					value.call (this, i, getClass (esto), stateVal),
					stateVal
				);
			});
		}

		devuelve this.each (function () {
			var className, i, self, classNames;

			if (isValidValue) {

				// Alternar nombres de clases individuales
				i = 0;
				self = jQuery (esto);
				classNames = classesToArray (valor);

				while ((className = classNames [i ++])) {

					// Verifique cada className dado, lista separada por espacios
					if (self.hasClass (className)) {
						self.removeClass (className);
					} más {
						self.addClass (className);
					}
				}

			// Cambiar el nombre completo de la clase
			} más si (valor === indefinido || tipo === "booleano") {
				className = getClass (esto);
				if (className) {

					// Almacenar className si está configurado
					dataPriv.set (esto, "__className__", className);
				}

				// Si el elemento tiene un nombre de clase o si nos pasamos `falso`,
				// luego elimine todo el nombre de la clase (si había uno, lo anterior lo guardó).
				// De lo contrario, recupere lo que se guardó previamente (si es que hay algo)
				// volver a la cadena vacía si no se almacenó nada.
				if (this.setAttribute) {
					this.setAttribute ("clase",
						className || valor === falso?
						"":
						dataPriv.get (esto, "__className__") || ""
					);
				}
			}
		});
	},

	hasClass: function (selector) {
		var className, elem,
			i = 0;

		className = "" + selector + "";
		while ((elem = this [i ++])) {
			if (elem.nodeType === 1 &&
				("" + stripAndCollapse (getClass (elem)) + "") .indexOf (className)> -1) {
					devuelve verdadero;
			}
		}

		falso retorno;
	}
});




var rreturn = / \ r / g;

jQuery.fn.extend ({
	val: función (valor) {
		var hooks, ret, valueIsFunction,
			elem = este [0];

		if (! argumentos.longitud) {
			si (elem) {
				hooks = jQuery.valHooks [elem.type] ||
					jQuery.valHooks [elem.nodeName.toLowerCase ()];

				si (ganchos &&
					"conseguir" en ganchos &&
					(ret = hooks.get (elem, "valor"))! == indefinido
				) {
					return ret;
				}

				ret = elem.value;

				// Maneja los casos de cuerdas más comunes
				if (typeof ret === "cadena") {
					return ret.replace (rreturn, "");
				}

				// Manejar casos donde el valor es nulo / indefinido o número
				return ret == null? "": ret;
			}

			regreso;
		}

		valueIsFunction = isFunction (valor);

		devuelve this.each (function (i) {
			var val;

			if (this.nodeType! == 1) {
				regreso;
			}

			if (valueIsFunction) {
				val = valor.call (esto, i, jQuery (esto) .val ());
			} más {
				val = valor;
			}

			// Tratar nulo / indefinido como ""; convertir números en cadena
			if (val == null) {
				val = "";

			} else if (typeof val === "número") {
				val + = "";

			} else if (Array.isArray (val)) {
				val = jQuery.map (val, function (value) {
					valor de retorno == nulo? "": valor + "";
				});
			}

			hooks = jQuery.valHooks [this.type] || jQuery.valHooks [this.nodeName.toLowerCase ()];

			// Si el conjunto devuelve indefinido, volver a la configuración normal
			if (! hooks ||! ("set" en hooks) || hooks.set (this, val, "value") === undefined) {
				this.value = val;
			}
		});
	}
});

jQuery.extend ({
	valHooks: {
		opción: {
			get: function (elem) {

				var val = jQuery.find.attr (elem, "valor");
				return val! = null?
					val:

					// Soporte: IE <= 10 - 11 solamente
					// option.text arroja excepciones (# 14686, # 14858)
					// Eliminar y contraer espacios en blanco
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse (jQuery.text (elem));
			}
		},
		Seleccione: {
			get: function (elem) {
				var valor, opción, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "seleccionar uno",
					valores = uno? nulo : [],
					max = uno? índice + 1: opciones.longitud;

				si (índice <0) {
					i = max;

				} más {
					yo = uno? índice: 0;
				}

				// Recorre todas las opciones seleccionadas
				para (; i <max; i ++) {
					opción = opciones [i];

					// Soporte: IE <= 9 solamente
					// IE8-9 no se actualiza seleccionado después de restablecer el formulario (# 2551)
					if ((opción.seleccionado || i === índice) &&

							// No devuelva opciones que están deshabilitadas o en un optgroup deshabilitado
							! option.disabled &&
							(! option.parentNode.disabled ||
								! nodeName (option.parentNode, "optgroup"))) {

						// Obtenga el valor específico para la opción
						valor = jQuery (opción) .val ();

						// No necesitamos una matriz para una selección
						si uno ) {
							valor de retorno;
						}

						// Las selecciones múltiples devuelven una matriz
						valores.push (valor);
					}
				}

				valores de retorno;
			},

			set: function (elem, value) {
				var optionSet, opción,
					options = elem.options,
					valores = jQuery.makeArray (valor),
					i = options.length;

				mientras yo-- ) {
					opción = opciones [i];

					/ * eslint-disable no-cond-assign * /

					si (opción.seleccionado =
						jQuery.inArray (jQuery.valHooks.option.get (opción), valores)> -1
					) {
						optionSet = true;
					}

					/ * eslint-enable no-cond-assign * /
				}

				// Obligar a los navegadores a comportarse de forma coherente cuando se establece un valor no coincidente
				if (! optionSet) {
					elem.selectedIndex = -1;
				}
				valores de retorno;
			}
		}
	}
});

// Radios y casillas de verificación getter / setter
jQuery.each (["radio", "casilla de verificación"], función () {
	jQuery.valHooks [this] = {
		set: function (elem, value) {
			if (Array.isArray (valor)) {
				return (elem.checked = jQuery.inArray (jQuery (elem) .val (), valor)> -1);
			}
		}
	};
	if (! support.checkOn) {
		jQuery.valHooks [this] .get = function (elem) {
			return elem.getAttribute ("valor") === null? "on": elem.value;
		};
	}
});




// Devuelve jQuery para inclusión solo de atributos


support.focusin = "onfocusin" en la ventana;


var rfocusMorph = / ^ (?: focusinfocus | focusoutblur) $ /,
	stopPropagationCallback = function (e) {
		e.stopPropagation ();
	};

jQuery.extend (jQuery.event, {

	disparador: función (evento, datos, elem, onlyHandlers) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [elem || documento],
			type = hasOwn.call (evento, "tipo")? event.type: evento,
			espacios de nombres = hasOwn.call (evento, "espacio de nombres")? event.namespace.split ("."): [];

		cur = lastElement = tmp = elem = elem || documento;

		// No hagas eventos en nodos de texto y comentarios
		if (elem.nodeType === 3 || elem.nodeType === 8) {
			regreso;
		}

		// enfoque / desenfoque se transforma en focusin / out; asegúrese de que no los estamos despidiendo ahora mismo
		if (rfocusMorph.test (type + jQuery.event.triggered)) {
			regreso;
		}

		if (type.indexOf (".")> -1) {

			// Activador con espacio de nombres; crear una expresión regular para que coincida con el tipo de evento en handle ()
			espacios de nombres = type.split (".");
			type = namespaces.shift ();
			namespaces.sort ();
		}
		ontype = type.indexOf (":") <0 && "on" + type;

		// La persona que llama puede pasar un objeto jQuery.Event, Object o simplemente una cadena de tipo de evento
		event = evento [jQuery.expando]?
			evento:
			new jQuery.Event (tipo, tipo de evento === "objeto" && evento);

		// Activar máscara de bits: & 1 para controladores nativos; & 2 para jQuery (siempre cierto)
		event.isTrigger = onlyHandlers? 2: 3;
		event.namespace = namespaces.join (".");
		event.rnamespace = event.namespace?
			new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)"):
			nulo;

		// Limpiar el evento en caso de que se esté reutilizando
		event.result = undefined;
		if (! event.target) {
			event.target = elem;
		}

		// Clone cualquier dato entrante y anteponga el evento, creando la lista arg del manejador
		datos = datos == nulo?
			[evento]:
			jQuery.makeArray (datos, [evento]);

		// Permitir que los eventos especiales se dibujen fuera de las líneas
		especial = jQuery.event.special [tipo] || {};
		if (! onlyHandlers && special.trigger && special.trigger.apply (elem, data) === false) {
			regreso;
		}

		// Determine la ruta de propagación de eventos por adelantado, según la especificación de eventos W3C (# 9951)
		// Burbujear hasta el documento, luego a la ventana; Esté atento a una var de ownerDocument global (# 9724)
		if (! onlyHandlers &&! special.noBubble &&! isWindow (elem)) {

			bubbleType = special.delegateType || tipo;
			if (! rfocusMorph.test (bubbleType + type)) {
				cur = cur.parentNode;
			}
			para (; cur; cur = cur.parentNode) {
				eventPath.push (cur);
				tmp = cur;
			}

			// Solo agregue la ventana si llegamos al documento (por ejemplo, no obj simple o DOM separado)
			if (tmp === (elem.ownerDocument || documento)) {
				eventPath.push (tmp.defaultView || tmp.parentWindow || ventana);
			}
		}

		// Controladores de incendios en la ruta del evento
		i = 0;
		while ((cur = eventPath [i ++]) &&! event.isPropagationStopped ()) {
			lastElement = cur;
			event.type = i> 1?
				bubbleType:
				special.bindType || tipo;

			// controlador jQuery
			manejar = (
					dataPriv.get (cur, "eventos") || Object.create (nulo)
				)[ tipo de evento ] &&
				dataPriv.get (cur, "identificador");
			si (manejar) {
				handle.apply (cur, datos);
			}

			// Controlador nativo
			handle = ontype && cur [ontype];
			if (handle && handle.apply && acceptData (cur)) {
				event.result = handle.apply (cur, data);
				if (event.result === false) {
					event.preventDefault ();
				}
			}
		}
		event.type = tipo;

		// Si nadie impidió la acción predeterminada, hágalo ahora
		if (! onlyHandlers &&! event.isDefaultPrevented ()) {

			if ((! special._default ||
				special._default.apply (eventPath.pop (), datos) === falso) &&
				acceptData (elem)) {

				// Llame a un método DOM nativo en el destino con el mismo nombre que el evento.
				// No realice acciones predeterminadas en la ventana, ahí es donde están las variables globales (# 6170)
				if (ontype && isFunction (elem [tipo]) &&! isWindow (elem)) {

					// No vuelva a activar un evento onFOO cuando llamamos a su método FOO ()
					tmp = elem [ontype];

					si (tmp) {
						elem [ontype] = nulo;
					}

					// Evita que se vuelva a activar el mismo evento, ya que ya lo hicimos burbujear arriba
					jQuery.event.triggered = tipo;

					if (event.isPropagationStopped ()) {
						lastElement.addEventListener (tipo, stopPropagationCallback);
					}

					elem [tipo] ();

					if (event.isPropagationStopped ()) {
						lastElement.removeEventListener (tipo, stopPropagationCallback);
					}

					jQuery.event.triggered = undefined;

					si (tmp) {
						elem [ontype] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Aprovecha un evento de donantes para simular uno diferente
	// Usado solo para eventos `focus (in | out)`
	simular: función (tipo, elem, evento) {
		var e = jQuery.extend (
			nuevo jQuery.Event (),
			evento,
			{
				tipo: tipo,
				isSimulated: verdadero
			}
		);

		jQuery.event.trigger (e, nulo, elem);
	}

});

jQuery.fn.extend ({

	disparador: función (tipo, datos) {
		devuelve this.each (function () {
			jQuery.event.trigger (tipo, datos, esto);
		});
	},
	triggerHandler: function (tipo, datos) {
		var elem = this [0];
		si (elem) {
			return jQuery.event.trigger (tipo, datos, elem, verdadero);
		}
	}
});


// Soporte: Firefox <= 44
// Firefox no tiene eventos de enfoque (in | out)
// Ticket relacionado - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Soporte: Chrome <= 48 - 49, Safari <= 9.0 - 9.1
// los eventos focus (in | out) se activan después de los eventos focus & blur,
// que es una violación de las especificaciones - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Ticket relacionado - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if (! support.focusin) {
	jQuery.each ({focus: "focusin", blur: "focusout"}, function (orig, fix) {

		// Adjunte un solo controlador de captura en el documento mientras alguien quiere focusin / focusout
		var handler = function (event) {
			jQuery.event.simulate (arreglar, event.target, jQuery.event.fix (evento));
		};

		jQuery.event.special [corrección] = {
			configuración: función () {

				// Manejar: nodos regulares (a través de `this.ownerDocument`), ventana
				// (a través de `this.document`) & document (a través de` this`).
				var doc = this.ownerDocument || este.documento || esta,
					adjunta = dataPriv.access (doc, arreglar);

				si (! adjunta) {
					doc.addEventListener (original, controlador, verdadero);
				}
				dataPriv.access (doc, arreglar, (adjunta || 0) + 1);
			},
			desmontaje: función () {
				var doc = this.ownerDocument || este.documento || esta,
					adjunta = dataPriv.access (doc, fix) - 1;

				si (! adjunta) {
					doc.removeEventListener (original, controlador, verdadero);
					dataPriv.remove (doc, arreglar);

				} más {
					dataPriv.access (doc, arreglar, adjuntar);
				}
			}
		};
	});
}
var location = window.location;

var nonce = {guid: Date.now ()};

var rquery = (/ \? /);



// Análisis xml entre navegadores
jQuery.parseXML = función (datos) {
	var xml;
	if (! datos || tipo de datos! == "cadena") {
		devolver nulo;
	}

	// Soporte: IE 9-11 solamente
	// IE lanza parseFromString con una entrada no válida.
	tratar {
		xml = (nueva ventana.DOMParser ()) .parseFromString (datos, "texto / xml");
	} captura (e) {
		xml = indefinido;
	}

	if (! xml || xml.getElementsByTagName ("parsererror") .length) {
		jQuery.error ("XML no válido:" + datos);
	}
	return xml;
};


var
	rbracket = / \ [\] $ /,
	rCRLF = / \ r? \ n / g,
	rsubmitterTypes = / ^ (?: enviar | botón | imagen | restablecer | archivo) $ / i,
	rsubmittable = / ^ (?: input | select | textarea | keygen) / i;

function buildParams (prefix, obj, traditional, add) {
	var nombre;

	if (Array.isArray (obj)) {

		// Serializar el elemento de la matriz.
		jQuery.each (obj, function (i, v) {
			if (tradicional || rbracket.test (prefijo)) {

				// Trate cada elemento de la matriz como un escalar.
				agregar (prefijo, v);

			} más {

				// El elemento no es escalar (matriz u objeto), codifica su índice numérico.
				buildParams (
					prefijo + "[" + (typeof v === "objeto" && v! = null? i: "") + "]",
					v,
					tradicional,
					añadir
				);
			}
		});

	} else if (! tradicional && toType (obj) === "object") {

		// Serializar el elemento del objeto.
		para (nombre en obj) {
			buildParams (prefijo + "[" + nombre + "]", obj [nombre], tradicional, añadir);
		}

	} más {

		// Serializar elemento escalar.
		agregar (prefijo, obj);
	}
}

// Serializar una matriz de elementos de formulario o un conjunto de
// clave / valores en una cadena de consulta
jQuery.param = function (a, tradicional) {
	prefijo var,
		s = [],
		add = function (key, valueOrFunction) {

			// Si el valor es una función, invocalo y usa su valor de retorno
			var value = isFunction (valueOrFunction)?
				valueOrFunction ():
				valueOrFunction;

			s [s.length] = encodeURIComponent (clave) + "=" +
				encodeURIComponent (valor == nulo? "": valor);
		};

	si (a == nulo) {
		regreso "";
	}

	// Si se pasó una matriz, suponga que es una matriz de elementos de formulario.
	if (Array.isArray (a) || (a.jquery &&! jQuery.isPlainObject (a))) {

		// Serializar los elementos del formulario
		jQuery.each (a, function () {
			agregar (this.name, this.value);
		});

	} más {

		// Si es tradicional, codifique la forma "antigua" (la forma 1.3.2 o anterior
		// lo hizo), de lo contrario codifica los parámetros de forma recursiva.
		para (prefijo en a) {
			buildParams (prefijo, un [prefijo], tradicional, añadir);
		}
	}

	// Devuelve la serialización resultante
	return s.join ("&");
};

jQuery.fn.extend ({
	serializar: función () {
		return jQuery.param (this.serializeArray ());
	},
	serializeArray: function () {
		return this.map (function () {

			// Puede agregar propHook para "elementos" para filtrar o agregar elementos de formulario
			var elementos = jQuery.prop (esto, "elementos");
			devolver elementos? jQuery.makeArray (elementos): esto;
		})
		.filter (función () {
			var type = this.type;

			// Usa .is (": disabled") para que fieldset [disabled] funcione
			devuelve this.name &&! jQuery (this) .is (": disabled") &&
				rsubmittable.test (this.nodeName) &&! rsubmitterTypes.test (tipo) &&
				(this.checked ||! rcheckableType.test (tipo));
		})
		.map (función (_i, elem) {
			var val = jQuery (esto) .val ();

			if (val == null) {
				devolver nulo;
			}

			if (Array.isArray (val)) {
				return jQuery.map (val, function (val) {
					return {nombre: elem.name, valor: val.replace (rCRLF, "\ r \ n")};
				});
			}

			return {nombre: elem.name, valor: val.replace (rCRLF, "\ r \ n")};
		} ).obtener();
	}
});


var
	r20 = /% 20 / g,
	rhash = /#.*$/,
	rantiCache = / ([? &]) _ = [^ &] * /,
	rheaders = / ^ (. *?): [\ t] * ([^ \ r \ n] *) $ / mg,

	// # 7653, # 8125, # 8152: detección de protocolo local
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = / ^ (?: OBTENER | HEAD) $ /,
	rprotocol = / ^ \ / \ //,

	/ * Prefiltros
	 * 1) Son útiles para introducir tipos de datos personalizados (consulte ajax / jsonp.js para ver un ejemplo)
	 * 2) Estos se denominan:
	 * - ANTES de pedir transporte
	 * - DESPUÉS de la serialización de parámetros (s.data es una cadena si s.processData es verdadero)
	 * 3) la clave es el tipo de datos
	 * 4) se puede utilizar el símbolo de captura "*"
	 * 5) la ejecución comenzará con el tipo de datos de transporte y ENTONCES continuará hasta "*" si es necesario
	 * /
	prefiltros = {},

	/ * Transporta fijaciones
	 * 1) la clave es el tipo de datos
	 * 2) se puede utilizar el símbolo de captura "*"
	 * 3) la selección comenzará con el tipo de datos de transporte y ENTONCES irá a "*" si es necesario
	 * /
	transportes = {},

	// Evite la secuencia de caracteres comentario-prólogo (# 10098); debe apaciguar la pelusa y evitar la compresión
	allTypes = "* /". concat ("*"),

	// Etiqueta de anclaje para analizar el origen del documento
	originAnchor = document.createElement ("a");
	originAnchor.href = ubicación.href;

// "Constructor" base para jQuery.ajaxPrefilter y jQuery.ajaxTransport
function addToPrefiltersOrTransports (estructura) {

	// dataTypeExpression es opcional y el valor predeterminado es "*"
	función de retorno (dataTypeExpression, func) {

		if (typeof dataTypeExpression! == "cadena") {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase (). match (rnothtmlwhite) || [];

		if (isFunction (func)) {

			// Para cada dataType en dataTypeExpression
			while ((dataType = dataTypes [i ++])) {

				// Anteponer si se solicita
				if (dataType [0] === "+") {
					dataType = dataType.slice (1) || "*";
					(estructura [tipo de datos] = estructura [tipo de datos] || []) .unshift (func);

				// De lo contrario añadir
				} más {
					(estructura [tipo de datos] = estructura [tipo de datos] || []) .push (func);
				}
			}
		}
	};
}

// Función de inspección básica para prefiltros y transportes
function inspectPrefiltersOrTransports (estructura, opciones, originalOptions, jqXHR) {

	var inspected = {},
		seekTransport = (estructura === transportes);

	función inspeccionar (tipo de datos) {
		var seleccionado;
		inspeccionado [tipo de datos] = verdadero;
		jQuery.each (estructura [tipo de datos] || [], función (_, prefilterOrFactory) {
			var dataTypeOrTransport = prefilterOrFactory (opciones, originalOptions, jqXHR);
			if (typeof dataTypeOrTransport === "cadena" &&
				! lookingTransport &&! inspected [dataTypeOrTransport]) {

				options.dataTypes.unshift (dataTypeOrTransport);
				inspeccionar (dataTypeOrTransport);
				falso retorno;
			} else if (lookingTransport) {
				return! (seleccionado = dataTypeOrTransport);
			}
		});
		volver seleccionado;
	}

	return inspeccionar (options.dataTypes [0]) || ! inspeccionado ["*"] && inspeccionar ("*");
}

// Una extensión especial para las opciones ajax
// que toma opciones "planas" (que no deben extenderse en profundidad)
// Corrige # 9887
function ajaxExtend (target, src) {
	var clave, profunda,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for (introduzca src) {
		if (src [clave]! == indefinido) {
			(flatOptions [key]? target: (deep || (deep = {}))) [key] = src [key];
		}
	}
	si (profundo) {
		jQuery.extend (verdadero, objetivo, profundo);
	}

	objetivo de retorno;
}

/ * Maneja respuestas a una solicitud ajax:
 *: encuentra el tipo de datos correcto (media entre el tipo de contenido y el tipo de datos esperado)
 * - devuelve la respuesta correspondiente
 * /
function ajaxHandleResponses (s, jqXHR, respuestas) {

	var ct, type, finalDataType, firstDataType,
		contenido = s.contenido,
		dataTypes = s.dataTypes;

	// Elimina auto dataType y obtén content-type en el proceso
	while (dataTypes [0] === "*") {
		dataTypes.shift ();
		if (ct === undefined) {
			ct = s.mimeType || jqXHR.getResponseHeader ("Tipo de contenido");
		}
	}

	// Compruebe si estamos tratando con un tipo de contenido conocido
	si (ct) {
		para (escriba el contenido) {
			if (contenido [tipo] && contenido [tipo] .test (ct)) {
				dataTypes.unshift (tipo);
				romper;
			}
		}
	}

	// Verifica si tenemos una respuesta para el tipo de datos esperado
	if (dataTypes [0] en las respuestas) {
		finalDataType = dataTypes [0];
	} más {

		// Prueba los tipos de datos convertibles
		para (escriba las respuestas) {
			if (! dataTypes [0] || s.converters [type + "" + dataTypes [0]]) {
				finalDataType = tipo;
				romper;
			}
			if (! firstDataType) {
				firstDataType = tipo;
			}
		}

		// O simplemente usa el primero
		finalDataType = finalDataType || firstDataType;
	}

	// Si encontramos un tipo de datos
	// Agregamos el tipo de datos a la lista si es necesario
	// y devuelve la respuesta correspondiente
	if (finalDataType) {
		if (finalDataType! == dataTypes [0]) {
			dataTypes.unshift (finalDataType);
		}
		devolver respuestas [finalDataType];
	}
}

/ * Conversiones en cadena dada la solicitud y la respuesta original
 * También establece los campos responseXXX en la instancia jqXHR
 * /
function ajaxConvert (s, response, jqXHR, isSuccess) {
	var conv2, current, conv, tmp, prev,
		convertidores = {},

		// Trabajar con una copia de dataTypes en caso de que necesitemos modificarlo para la conversión
		dataTypes = s.dataTypes.slice ();

	// Crear mapa de convertidores con claves en minúsculas
	if (dataTypes [1]) {
		para (conv en convertidores) {
			convertidores [conv.toLowerCase ()] = s.converters [conv];
		}
	}

	current = dataTypes.shift ();

	// Convertir a cada tipo de datos secuencial
	while (actual) {

		if (s.responseFields [actual]) {
			jqXHR [s.responseFields [actual]] = respuesta;
		}

		// Aplicar el filtro de datos si se proporciona
		if (! prev && isSuccess && s.dataFilter) {
			response = s.dataFilter (respuesta, s.dataType);
		}

		prev = actual;
		current = dataTypes.shift ();

		si (actual) {

			// Solo hay trabajo por hacer si el tipo de datos actual no es automático
			si (actual === "*") {

				actual = anterior;

			// Convierta la respuesta si prev dataType no es automático y difiere del actual
			} else if (prev! == "*" && prev! == current) {

				// Busca un conversor directo
				conv = convertidores [anterior + "" + actual] || convertidores ["*" + actual];

				// Si no encuentra ninguno, busque un par
				if (! conv) {
					para (conv2 en convertidores) {

						// Si conv2 emite corriente
						tmp = conv2.split ("");
						if (tmp [1] === actual) {

							// Si prev se puede convertir en entrada aceptada
							conv = convertidores [prev + "" + tmp [0]] ||
								convertidores ["*" + tmp [0]];
							if (conv) {

								// Convertidores de equivalencia condensados
								if (conv === verdadero) {
									conv = convertidores [conv2];

								// De lo contrario, inserte el tipo de datos intermedio
								} else if (converters [conv2]! == true) {
									corriente = tmp [0];
									dataTypes.unshift (tmp [1]);
								}
								romper;
							}
						}
					}
				}

				// Aplicar convertidor (si no es una equivalencia)
				if (conv! == true) {

					// A menos que se permita que aparezcan errores, capturarlos y devolverlos
					if (conv && s.throws) {
						respuesta = conv (respuesta);
					} más {
						tratar {
							respuesta = conv (respuesta);
						} captura (e) {
							regreso {
								estado: "parsererror",
								error: conv? e: "Sin conversión de" + anterior + "a" + actual
							};
						}
					}
				}
			}
		}
	}

	return {estado: "éxito", datos: respuesta};
}

jQuery.extend ({

	// Contador para mantener el número de consultas activas
	activo: 0,

	// Caché de encabezado de última modificación para la próxima solicitud
	última modificación: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		tipo: "OBTENER",
		isLocal: rlocalProtocol.test (location.protocol),
		global: verdadero,
		processData: verdadero,
		async: verdadero,
		contentType: "application / x-www-form-urlencoded; charset = UTF-8",

		/ *
		tiempo de espera: 0,
		datos: nulo,
		dataType: nulo,
		nombre de usuario: nulo,
		contraseña: nula,
		caché: nulo,
		arroja: falso,
		tradicional: falso,
		encabezados: {},
		* /

		acepta: {
			"*": todos los tipos,
			texto: "texto / plano",
			html: "texto / html",
			xml: "aplicación / xml, texto / xml",
			json: "aplicación / json, texto / javascript"
		},

		contenido: {
			xml: / \ bxml \ b /,
			html: / \ bhtml /,
			json: / \ bjson \ b /
		},

		responseFields: {
			xml: "responseXML",
			texto: "responseText",
			json: "responseJSON"
		},

		// Convertidores de datos
		// Las claves separan los tipos de origen (o catchall "*") y de destino con un solo espacio
		convertidores: {

			// Convierte cualquier cosa en texto
			"* texto": Cadena,

			// Texto a html (verdadero = sin transformación)
			"texto html": verdadero,

			// Evaluar el texto como una expresión json
			"text json": JSON.parse,

			// Analizar texto como xml
			"texto xml": jQuery.parseXML
		},

		// Para opciones que no deberían extenderse en profundidad:
		// puede agregar sus propias opciones personalizadas aquí si
		// y cuando creas uno que no debería ser
		// extendido profundo (ver ajaxExtend)
		flatOptions: {
			url: cierto,
			contexto: verdadero
		}
	},

	// Crea un objeto de configuración completo en el objetivo
	// con los campos ajaxSettings y settings.
	// Si se omite el objetivo, escribe en ajaxSettings.
	ajaxSetup: function (target, settings) {
		volver configuración?

			// Construyendo un objeto de configuración
			ajaxExtend (ajaxExtend (destino, jQuery.ajaxSettings), configuración):

			// Ampliando ajaxSettings
			ajaxExtend (jQuery.ajaxSettings, destino);
	},

	ajaxPrefilter: addToPrefiltersOrTransports (prefiltros),
	ajaxTransport: addToPrefiltersOrTransports (transportes),

	// Método principal
	ajax: function (url, opciones) {

		// Si la URL es un objeto, simule la firma anterior a 1.5
		if (typeof url === "object") {
			opciones = url;
			url = indefinido;
		}

		// Forzar opciones para que sean un objeto
		opciones = opciones || {};

		transporte var,

			// URL sin parámetro anti-caché
			cacheURL,

			// Encabezados de respuesta
			responseHeadersString,
			responseHeaders,

			// controlador de tiempo de espera
			timeoutTimer,

			// Var de limpieza de URL
			urlAnchor,

			// Estado de la solicitud (se vuelve falso al enviarse y verdadero al finalizar)
			terminado,

			// Para saber si se enviarán eventos globales
			fireGlobals

			// Variable de bucle
			yo,

			// parte no almacenada en caché de la URL
			sin caché

			// Crea el objeto de opciones final
			s = jQuery.ajaxSetup ({}, opciones),

			// Contexto de devoluciones de llamada
			callbackContext = s.context || s,

			// El contexto para los eventos globales es callbackContext si es un nodo DOM o una colección jQuery
			globalEventContext = s.context &&
				(callbackContext.nodeType || callbackContext.jquery)?
					jQuery (callbackContext):
					jQuery.event,

			// Diferidos
			diferido = jQuery.Deferred (),
			completeDeferred = jQuery.Callbacks ("una vez memoria"),

			// devoluciones de llamada dependientes del estado
			statusCode = s.statusCode || {},

			// Encabezados (se envían todos a la vez)
			requestHeaders = {},
			requestHeadersNames = {},

			// Mensaje de aborto predeterminado
			strAbort = "cancelado",

			// Falso xhr
			jqXHR = {
				readyState: 0,

				// Crea tablas hash de encabezados si es necesario
				getResponseHeader: function (key) {
					var match;
					if (completado) {
						if (! responseHeaders) {
							responseHeaders = {};
							while ((coincidencia = rheaders.exec (responseHeadersString))) {
								responseHeaders [match [1] .toLowerCase () + ""] =
									(responseHeaders [match [1] .toLowerCase () + ""] || [])
										.concat (coincide con [2]);
							}
						}
						match = responseHeaders [key.toLowerCase () + ""];
					}
					return match == null? null: match.join (",");
				},

				// Cadena sin procesar
				getAllResponseHeaders: function () {
					regreso completado? responseHeadersString: null;
				},

				// Almacena en caché el encabezado
				setRequestHeader: function (nombre, valor) {
					si (completado == nulo) {
						nombre = requestHeadersNames [name.toLowerCase ()] =
							requestHeadersNames [name.toLowerCase ()] || nombre;
						requestHeaders [nombre] = valor;
					}
					devuelve esto;
				},

				// Anula el encabezado de tipo de contenido de la respuesta
				overrideMimeType: function (type) {
					si (completado == nulo) {
						s.mimeType = tipo;
					}
					devuelve esto;
				},

				// devoluciones de llamada dependientes del estado
				statusCode: function (map) {
					código var;
					if (mapa) {
						if (completado) {

							// Ejecuta las devoluciones de llamada apropiadas
							jqXHR.always (mapa [jqXHR.status]);
						} más {

							// Lazy-agregue las nuevas devoluciones de llamada de una manera que conserve las antiguas
							para (código en el mapa) {
								statusCode [código] = [statusCode [código], mapa [código]];
							}
						}
					}
					devuelve esto;
				},

				// Cancelar la solicitud
				abortar: function (statusText) {
					var finalText = statusText || strAbort;
					if (transporte) {
						transport.abort (finalText);
					}
					hecho (0, texto final);
					devuelve esto;
				}
			};

		// Adjuntar aplazamientos
		promesa.deferida (jqXHR);

		// Agregar protocolo si no se proporciona (los prefiltros pueden esperarlo)
		// Manejar URL falsa en el objeto de configuración (# 10093: coherencia con la firma anterior)
		// También usamos el parámetro url si está disponible
		s.url = ((url || s.url || ubicación.href) + "")
			.replace (rprotocol, location.protocol + "//");

		// Opción de método de alias para escribir según ticket # 12004
		s.type = options.method || options.type || s.method || s.type;

		// Extraer la lista de tipos de datos
		s.dataTypes = (s.dataType || "*") .toLowerCase (). match (rnothtmlwhite) || [""];

		// Una solicitud entre dominios está en orden cuando el origen no coincide con el origen actual.
		if (s.crossDomain == null) {
			urlAnchor = document.createElement ("a");

			// Soporte: IE <= 8-11, Edge 12-15
			// IE lanza una excepción al acceder a la propiedad href si la URL está mal formada,
			// por ejemplo, http://example.com:80x/
			tratar {
				urlAnchor.href = s.url;

				// Soporte: IE <= 8-11 solamente
				// La propiedad de host de Anchor no está configurada correctamente cuando s.url es relativa
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host! ==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} captura (e) {

				// Si hay un error al analizar la URL, suponga que es crossDomain,
				// puede ser rechazado por el transporte si no es válido
				s.crossDomain = true;
			}
		}

		// Convertir datos si aún no son una cadena
		if (s.data && s.processData && typeof s.data! == "string") {
			s.data = jQuery.param (s.data, s.traditional);
		}

		// Aplicar prefiltros
		inspectPrefiltersOrTransports (prefiltros, s, opciones, jqXHR);

		// Si la solicitud fue cancelada dentro de un prefiltro, deténgase allí
		if (completado) {
			return jqXHR;
		}

		// Podemos disparar eventos globales a partir de ahora si se nos solicita
		// No disparar eventos si jQuery.event no está definido en un escenario de uso de AMD (# 15118)
		fireGlobals = jQuery.event && s.global;

		// Esté atento a un nuevo conjunto de solicitudes
		if (fireGlobals && jQuery.active ++ === 0) {
			jQuery.event.trigger ("ajaxStart");
		}

		// Mayúsculas el tipo
		s.type = s.type.toUpperCase ();

		// Determinar si la solicitud tiene contenido
		s.hasContent =! rnoContent.test (s.type);

		// Guarde la URL en caso de que estemos jugando con If-Modified-Since
		// y / o encabezado If-None-Match más adelante
		// Eliminar hash para simplificar la manipulación de URL
		cacheURL = s.url.replace (rhash, "");

		// Más opciones para el manejo de solicitudes sin contenido
		if (! s.hasContent) {

			// Recuerda el hash para que podamos devolverlo
			uncached = s.url.slice (cacheURL.length);

			// Si los datos están disponibles y deben procesarse, agregue datos a la URL
			if (s.data && (s.processData || tipo de s.data === "cadena")) {
				cacheURL + = (rquery.test (cacheURL)? "&": "?") + s.data;

				// # 9682: eliminar datos para que no se utilicen en un eventual reintento
				eliminar los datos;
			}

			// Agregue o actualice el parámetro anti-caché si es necesario
			if (s.caché === falso) {
				cacheURL = cacheURL.replace (rantiCache, "$ 1");
				uncached = (rquery.test (cacheURL)? "&": "?") + "_ =" + (nonce.guid ++) +
					sin caché
			}

			// Pon hash y anti-caché en la URL que se solicitará (gh-1732)
			s.url = cacheURL + sin caché;

		// Cambie '% 20' a '+' si está codificado en el contenido del cuerpo del formulario (gh-2658)
		} else if (s.data && s.processData &&
			(s.contentType || "") .indexOf ("application / x-www-form-urlencoded") === 0) {
			s.data = s.data.replace (r20, "+");
		}

		// Establecer el encabezado If-Modified-Since y / o If-None-Match, si está en modo ifModified.
		if (s.ifModified) {
			if (jQuery.lastModified [cacheURL]) {
				jqXHR.setRequestHeader ("Si-Modificado-Desde", jQuery.lastModified [cacheURL]);
			}
			if (jQuery.etag [cacheURL]) {
				jqXHR.setRequestHeader ("Si-ninguna-coincide", jQuery.etag [cacheURL]);
			}
		}

		// Establecer el encabezado correcto, si se envían datos
		if (s.data && s.hasContent && s.contentType! == false || options.contentType) {
			jqXHR.setRequestHeader ("Tipo de contenido", s.contentType);
		}

		// Establezca el encabezado Acepta para el servidor, según el tipo de datos
		jqXHR.setRequestHeader (
			"Aceptar",
			s.dataTypes [0] && s.accepts [s.dataTypes [0]]?
				s.accepts [s.dataTypes [0]] +
					(s.dataTypes [0]! == "*"? "," + allTypes + "; q = 0.01": ""):
				acepta ["*"]
		);

		// Verificar la opción de encabezados
		para (yo en los encabezados) {
			jqXHR.setRequestHeader (i, en los encabezados [i]);
		}

		// Permitir encabezados / tipos MIME personalizados y abortar anticipadamente
		si (antes de enviar &&
			(s.beforeSend.call (callbackContext, jqXHR, s) === falso || completado)) {

			// Abortar si aún no lo ha hecho y regresar
			return jqXHR.abort ();
		}

		// Abortar ya no es una cancelación
		strAbort = "abortar";

		// Instalar devoluciones de llamada en diferidos
		completeDeferred.add (s.complete);
		jqXHR.done (s.success);
		jqXHR.fail (s.error);

		// Obtener transporte
		transport = inspectPrefiltersOrTransports (transportes, s, opciones, jqXHR);

		// Si no hay transporte, abortamos automáticamente
		if (! transporte) {
			hecho (-1, "Sin transporte");
		} más {
			jqXHR.readyState = 1;

			// Enviar evento global
			if (fireGlobals) {
				globalEventContext.trigger ("ajaxSend", [jqXHR, s]);
			}

			// Si la solicitud fue abortada dentro de ajaxSend, deténgase allí
			if (completado) {
				return jqXHR;
			}

			// Se acabó el tiempo
			if (s.async && s.timeout> 0) {
				timeoutTimer = window.setTimeout (function () {
					jqXHR.abort ("tiempo de espera");
				}, s.timeout);
			}

			tratar {
				completado = falso;
				transport.send (requestHeaders, hecho);
			} captura (e) {

				// Relanzar excepciones posteriores a la finalización
				if (completado) {
					lanzar e;
				}

				// Propagar otros como resultados
				hecho (-1, e);
			}
		}

		// Devolución de llamada para cuando todo esté hecho
		función realizada (estado, nativeStatusText, respuestas, encabezados) {
			var es Éxito, éxito, error, respuesta, modificado,
				statusText = nativeStatusText;

			// Ignorar las invocaciones repetidas
			if (completado) {
				regreso;
			}

			completado = verdadero;

			// Borrar el tiempo de espera si existe
			if (timeoutTimer) {
				window.clearTimeout (timeoutTimer);
			}

			// Transporte de desreferencia para la recolección temprana de basura
			// (no importa cuánto tiempo se usará el objeto jqXHR)
			transporte = indefinido;

			// Caché de encabezados de respuesta
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );