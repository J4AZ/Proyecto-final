function stringToNodeArray(expresion) {
    const tokens = expresion.match(/(\d+|\*|\/|\+|-|\^)/g);
    return tokens.map(token => new Nodo(token));
}

function eliminar(arr, index) {
    arr.splice(index, 1);
}

function insertar(arr, index, element) {
    arr.splice(index, 0, element);
}

function crearArbol(expresion) {
    let exp = stringToNodeArray(expresion);

    for (let i = 0; i < exp.length; i++) {
        if (exp[i].valor === "^") {
            let nodo = exp[i];
            nodo.izq = exp[i - 1];
            nodo.der = exp[i + 1];

            eliminar(exp, i - 1);
            eliminar(exp, i - 1);
            eliminar(exp, i - 1);
            
            insertar(exp, i - 1, nodo);
            i--;
        }
    }

    for (let i = 0; i < exp.length; i++) {
        if (exp[i].valor === "*" || exp[i].valor === "/") {
            let nodo = exp[i];
            nodo.izq = exp[i - 1];
            nodo.der = exp[i + 1];

            eliminar(exp, i - 1);
            eliminar(exp, i - 1);
            eliminar(exp, i - 1);
            insertar(exp, i - 1, nodo);
            i--;
        }
    }

    for (let i = 0; i < exp.length; i++) {
        if (exp[i].valor === "+" || exp[i].valor === "-") {
            let nodo = exp[i];
            nodo.izq = exp[i - 1];
            nodo.der = exp[i + 1];

            eliminar(exp, i - 1);
            eliminar(exp, i - 1);
            eliminar(exp, i - 1);
            insertar(exp, i - 1, nodo);
            i--;
        }
    }

    let arbol = new Arbol();
    arbol.raiz = exp[0];

    return arbol;
}

function resolverPostOrder(postOrderStr) {
    const post = stringToCharArray(postOrderStr);
    const pila = [];

    function operar(op) {
        let b = pila.pop(); 
        let a = pila.pop(); 
        
        if (op === "+") pila.push(a + b);
        else if (op === "-") pila.push(a - b);
        else if (op === "*") pila.push(a * b);
        else if (op === "/") pila.push(a / b);
        else if (op === "^") pila.push(Math.pow(a, b));
    }

    for (let i = 0; i < post.length; i++) {
        let simbolo = post[i];
        if (!isNaN(Number(simbolo))) {
            pila.push(Number(simbolo));
        } else {
            operar(simbolo);
        }
    }
    return pila[0];
}

function resolverPreOrder(preOrderStr) {
    const pre = stringToCharArray(preOrderStr).reverse(); 
    const pila = [];

    function operar(op) {
        let a = pila.pop(); 
        let b = pila.pop(); 
        
        if (op === "+") pila.push(a + b);
        else if (op === "-") pila.push(a - b);
        else if (op === "*") pila.push(a * b);
        else if (op === "/") pila.push(a / b);
        else if (op === "^") pila.push(Math.pow(a, b));
    }

    for (let i = 0; i < pre.length; i++) {
        let simbolo = pre[i];
        if (!isNaN(Number(simbolo))) {
            pila.push(Number(simbolo));
        } else {
            operar(simbolo);
        }
    }
    return pila[0];
}