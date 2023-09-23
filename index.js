import fs from "node:fs";

const path = "./data";
const nombreArchivo = "user.json";

const escribirArchivo = () => {
  const contenido = `{
    "nombre":"pedro", 
    "apellido": "Arias", 
    "edad": 58, 
    "salario": 2500, 
    "activo": true
  }`;

  try {
    fs.writeFileSync(`${path}/${nombreArchivo}`, contenido);

    console.log(`El archivo ${nombreArchivo} se ha creado correctamente`);
  } catch (error) {
    console.log(error);
    console.log("ha ocurrido un error en la creacion del archivo");
  }
};

const leerArchivo = () => {
  try {
    const buffer = fs.readFileSync(`${path}/${nombreArchivo}`, {
      encoding: "utf8",
    });

    console.log(buffer);
  } catch (error) {
    console.log("archivo no encotrado");
  }
};

escribirArchivo();

leerArchivo();
