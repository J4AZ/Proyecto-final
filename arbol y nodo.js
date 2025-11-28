class Arbol {
    constructor() {
        this.raiz = null;
    }

    preOrder() {
        const resultado = [];
        this._preOrder(this.raiz, resultado);
        return resultado.join(" ");
    }

    _preOrder(nodo, resultado) {
        if (nodo) {
            resultado.push(nodo.valor);
            this._preOrder(nodo.izq, resultado);
            this._preOrder(nodo.der, resultado);
        }
    }

    postOrder() {
        const resultado = [];
        this._postOrder(this.raiz, resultado);
        return resultado.join(" ");
    }

    _postOrder(nodo, resultado) {
        if (nodo) {
            this._postOrder(nodo.izq, resultado);
            this._postOrder(nodo.der, resultado);
            resultado.push(nodo.valor);
        }
    }
}

class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izq = null;
        this.der = null;
    }
}