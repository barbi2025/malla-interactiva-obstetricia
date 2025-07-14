const ramos = [
  { nombre: "Introducción a la profesión", requisitos: [] },
  { nombre: "Química general y orgánica", requisitos: [], desbloquea: ["Bioquímica clínica"] },
  { nombre: "Biología molecular de la célula", requisitos: [], desbloquea: ["Bioquímica clínica", "Desarrollo embrio-fetal"] },
  { nombre: "Anatomía general", requisitos: [], desbloquea: ["Morfología reproductiva", "Fisiología"] },
  { nombre: "Taller de desarrollo personal", requisitos: [] },
  { nombre: "Salud pública", requisitos: [], desbloquea: ["Salud familiar y comunitaria", "Promoción y educación para la salud II", "Epidemiología clínica y social"] },
  { nombre: "Promoción y educación para la salud I", requisitos: [], desbloquea: ["Promoción y educación para la salud II"] },
  { nombre: "Bioética y aspectos legales", requisitos: [] },
  { nombre: "Morfología reproductiva", requisitos: ["Anatomía general"], desbloquea: ["Desarrollo embrio-fetal"] },
  { nombre: "Bioquímica clínica", requisitos: ["Química general y orgánica", "Biología molecular de la célula"], desbloquea: ["Fisiología", "Microbiología y parasitología clínica", "Farmacología general y gineco-obstétrica"] },
  { nombre: "Psicología del desarrollo", requisitos: [], desbloquea: ["Psicología de la mujer"] },
  { nombre: "Inglés I", requisitos: [], desbloquea: ["Inglés II"] },
  { nombre: "Salud familiar y comunitaria", requisitos: ["Salud pública"], desbloquea: ["Obstetricia I", "Ginecología I", "Neonatología I"] },
  { nombre: "Promoción y educación para la salud II", requisitos: ["Promoción y educación para la salud I", "Salud pública"], desbloquea: ["Clínica proceso de enfermería", "Atención primaria obstétrica"] },
  { nombre: "Epidemiología clínica y social", requisitos: ["Salud pública"] },
  { nombre: "Desarrollo embrio-fetal", requisitos: ["Biología molecular de la célula", "Morfología reproductiva"], desbloquea: ["Obstetricia I", "Ginecología I", "Neonatología I"] },
  { nombre: "Fisiología", requisitos: ["Anatomía general", "Bioquímica clínica"], desbloquea: ["Proceso de atención de enfermería", "Fisiopatología"] },
  { nombre: "Microbiología y parasitología clínica", requisitos: ["Bioquímica clínica"], desbloquea: ["Proceso de atención de enfermería"] },
  { nombre: "Bioestadística", requisitos: [], desbloquea: ["Investigación en salud I"] },
  { nombre: "Obstetricia I", requisitos: ["Salud familiar y comunitaria", "Desarrollo embrio-fetal"], desbloquea: ["Obstetricia II", "Atención primaria obstétrica"] },
  { nombre: "Ginecología I", requisitos: ["Salud familiar y comunitaria", "Desarrollo embrio-fetal"], desbloquea: ["Ginecología II"] },
  { nombre: "Neonatología I", requisitos: ["Salud familiar y comunitaria", "Desarrollo embrio-fetal"], desbloquea: ["Neonatología II"] },
  { nombre: "Proceso de atención de enfermería", requisitos: ["Fisiología", "Microbiología y parasitología clínica"], desbloquea: ["Clínica proceso de enfermería"] },
  { nombre: "Farmacología general y gineco-obstétrica", requisitos: ["Bioquímica clínica"] },
  { nombre: "Fisiopatología", requisitos: ["Fisiología"], desbloquea: ["Obstetricia II", "Ginecología II", "Neonatología II"] },
  { nombre: "Inglés II", requisitos: ["Inglés I"], desbloquea: ["Inglés III"] },
  { nombre: "Obstetricia II", requisitos: ["Obstetricia I", "Fisiopatología"], desbloquea: ["Integración profesional"] },
  { nombre: "Ginecología II", requisitos: ["Ginecología I", "Fisiopatología"], desbloquea: ["Sexualidad y sexología", "Integración profesional", "Atención primaria ginecológica"] },
  { nombre: "Neonatología II", requisitos: ["Neonatología I", "Fisiopatología"], desbloquea: ["Integración profesional", "Clínica en Neonatología I"] },
  { nombre: "Investigación en salud I", requisitos: ["Bioestadística"], desbloquea: ["Investigación en salud II"] },
  { nombre: "Clínica proceso de enfermería", requisitos: ["Proceso de atención de enfermería", "Promoción y educación para la salud II"], desbloquea: ["Enfermería médico-quirúrgica"] },
  { nombre: "Atención primaria obstétrica", requisitos: ["Promoción y educación para la salud II", "Obstetricia I"], desbloquea: ["Atención primaria ginecológica"] },
  { nombre: "Investigación en salud II", requisitos: ["Investigación en salud I"], desbloquea: ["Proyecto de licenciatura I"] },
  { nombre: "Sexualidad y sexología", requisitos: ["Ginecología II"] },
  { nombre: "Integración profesional", requisitos: ["Obstetricia II", "Ginecología II", "Neonatología II"], desbloquea: ["Clínica de servicios gineco-obstétricos I", "Clínica en Neonatología I", "Proceso de intervención comunitaria"] },
  { nombre: "Psicología de la mujer", requisitos: ["Psicología del desarrollo"] },
  { nombre: "Enfermería médico-quirúrgica", requisitos: ["Clínica proceso de enfermería"] },
  { nombre: "Atención primaria ginecológica", requisitos: ["Atención primaria obstétrica", "Ginecología II"], desbloquea: ["Gestión en salud I", "Clínica de servicios gineco-obstétricos I"] },
  { nombre: "Inglés III", requisitos: ["Inglés II"] },
  { nombre: "Proyecto de licenciatura I", requisitos: ["Investigación en salud II"], desbloquea: ["Proyecto de licenciatura II"] },
  { nombre: "Gestión en salud I", requisitos: ["Atención primaria ginecológica"], desbloquea: ["Gestión en salud II"] },
  { nombre: "Clínica de servicios gineco-obstétricos I", requisitos: ["Integración profesional", "Atención primaria ginecológica"], desbloquea: ["Clínica de servicios gineco-obstétricos II"] },
  { nombre: "Clínica en Neonatología I", requisitos: ["Neonatología II", "Integración profesional"], desbloquea: ["Clínica en Neonatología II"] },
  { nombre: "Proceso de intervención comunitaria", requisitos: ["Integración profesional"], desbloquea: ["Internado de atención primaria y comunitaria"] },
  { nombre: "Optativo de formación general", requisitos: [], desbloquea: ["Internado integral"] },
  { nombre: "Proyecto de licenciatura II", requisitos: ["Proyecto de licenciatura I"] },
  { nombre: "Gestión en salud II", requisitos: ["Gestión en salud I"], desbloquea: ["Gestión en salud III"] },
  { nombre: "Clínica de servicios gineco-obstétricos II", requisitos: ["Clínica de servicios gineco-obstétricos I"], desbloquea: ["Internado intrahospitalario"] },
  { nombre: "Clínica en Neonatología II", requisitos: ["Clínica en Neonatología I"], desbloquea: ["Internado intrahospitalario"] },
  { nombre: "Electivo de formación I", requisitos: [], desbloquea: ["Internado integral"] },
  { nombre: "Gestión en salud III", requisitos: ["Gestión en salud II"], desbloquea: ["Internado integral"] },
  { nombre: "Internado intrahospitalario", requisitos: ["Clínica de servicios gineco-obstétricos II", "Clínica en Neonatología II"], desbloquea: ["Internado integral"] },
  { nombre: "Internado de atención primaria y comunitaria", requisitos: ["Proceso de intervención comunitaria"], desbloquea: ["Internado integral"] },
  { nombre: "Electivo de formación II", requisitos: [], desbloquea: ["Internado integral"] },
  { nombre: "Internado integral", requisitos: ["Internado intrahospitalario", "Internado de atención primaria y comunitaria", "Gestión en salud III", "Electivo de formación I", "Electivo de formación II", "Optativo de formación general"] },
  { nombre: "Trabajo de titulación", requisitos: [] },
  { nombre: "Examen de titulación", requisitos: [] }
];

const estadoRamos = {};

function crearMalla() {
  const malla = document.getElementById("malla");
  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.textContent = ramo.nombre;
    if (ramo.requisitos.length > 0) {
      div.classList.add("bloqueado");
    }
    div.addEventListener("click", () => aprobarRamo(ramo, div));
    malla.appendChild(div);
    estadoRamos[ramo.nombre] = { aprobado: false, div, ramo };
  });
}

function aprobarRamo(ramo, div) {
  if (estadoRamos[ramo.nombre].aprobado) return;
  estadoRamos[ramo.nombre].aprobado = true;
  div.classList.add("aprobado");
  (ramo.desbloquea || []).forEach(nombre => {
    const dep = estadoRamos[nombre];
    const cumple = dep.ramo.requisitos.every(r => estadoRamos[r]?.aprobado);
    if (cumple) {
      dep.div.classList.remove("bloqueado");
    }
  });
}

crearMalla();

