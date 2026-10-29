import { useState } from 'react';

export function Blob() {
  const [miBlob, setMiBlob] = useState(null);

  function newBlob() {
    const blob = new Blob(
      ['Hola este es un contenido muy nuevo, estoy tratando de crear texto para ver si esto funciona'],
      { type: 'text/plain' }
    );

    setMiBlob(blob);
    alert(`Blob creado exitosamente en memoria.\nTamaño: ${blob.size} bytes.`);
  }

  function descargar(blob, nombreArchivo) {
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');

    enlace.href = url;
    enlace.download = nombreArchivo;
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();

    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function downloadBlob() {
    if (!miBlob) {
      alert('No hay un Blob creado. Por favor, crea uno primero.');
      return;
    }

    descargar(miBlob, 'archivo.txt');
  }

  function sliceBlob() {
    if (!miBlob) {
      alert('No hay un Blob creado. Por favor, crea uno primero.');
      return;
    }

    const slicedBlob = miBlob.slice(0, 35, 'text/plain');
    descargar(slicedBlob, 'archivo_slice.txt');

    alert(`Blob recortado.\nTamaño: ${slicedBlob.size} bytes.`);
  }

  return (
    <>
      <h3 className="text-center mb-2">Blobs</h3>

      <section className="container mb-4">
        <div className="d-flex justify-content-center gap-2 mb-3">
          <button className="btn btn-primary" type="button" onClick={newBlob}>
            Nuevo Blob
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={downloadBlob}
          >
            Descargar Blob
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={sliceBlob}
          >
            Usar Slice()
          </button>
        </div>
      </section>
    </>
  );
}