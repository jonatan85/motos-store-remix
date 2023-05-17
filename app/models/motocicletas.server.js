export async function getMotocicletas() {
    const respuesta = await fetch(`${process.env.API_URL}/motocicletas`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getMotocicleta(url) {
    const respuesta = await fetch(`${process.env.API_URL}/motocicletas/url/${url}`);
    const resultado = await respuesta.json();
    return resultado;
}

