/* 7.  ECMAScript Modules (Módulos de ECMAScript) */

export function suma(a, b) {
    return ""
}

export function otraFuncion() {
    return ""
}

export default function resta(a, b) {
    return ""
}

// Se importan las funciones.
import { suma, otraFuncion} from './suma'
import resta from './resta'

function calculadora () {
    suma();

    resta();
}

// Ejemplo de còmo se usa en react.

// Con esta linea se puede llamar a cada función de React sin poner 'React' al inicio
import React, {useState, useEffect, Fragment} from 'react'

// Esto es declarando cada funcion por separado
React.useState,
React.useEffect,
React.Fragment