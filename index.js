const chassi = "1HGCM82633A004352";

const criptografarChassi = (chassi) => { 
  const bloco_1 = chassi.slice(0, 3).split("").reverse();
  const bloco_2 = chassi.slice(3, 9).split("").reverse();
  const bloco_3 = chassi.slice(9).split("").reverse();
  const bloco_1_criptografado = [];
  const bloco_2_criptografado = [];
  const bloco_3_criptografado = [];
  const chassi_criptografado = [];

  for (let parte of bloco_1) {
    const codeASCII = parte.charCodeAt(0);
    bloco_1_criptografado.push(codeASCII);
  }

  for (let parte of bloco_2) {
    const codeASCII = parte.charCodeAt(0);
    bloco_2_criptografado.push(codeASCII);
  }

  for (let parte of bloco_3) {
    const codeASCII = parte.charCodeAt(0);
    bloco_3_criptografado.push(codeASCII);
  }

  chassi_criptografado.push(bloco_1_criptografado.join("."));
  chassi_criptografado.push(bloco_2_criptografado.join("."));
  chassi_criptografado.push(bloco_3_criptografado.join("."));

  return chassi_criptografado;
}

const descriptografarChassi = (chassi_criptografado) => {
  const bloco_1 = chassi_criptografado[0].split(".");
  const bloco_2 = chassi_criptografado[1].split(".");
  const bloco_3 = chassi_criptografado[2].split(".");
  const bloco_1_revertido = [];
  const bloco_2_revertido = [];
  const bloco_3_revertido = [];
  const chassi_revertido = [];

  for (let code of bloco_1) {
    const char = String.fromCharCode(code);
    bloco_1_revertido.push(char);
  }

  for (let code of bloco_2) {
    const char = String.fromCharCode(code);
    bloco_2_revertido.push(char);
  }

  for (let code of bloco_3) {
    const char = String.fromCharCode(code);
    bloco_3_revertido.push(char);
  }

  bloco_1_revertido.reverse();
  bloco_2_revertido.reverse();
  bloco_3_revertido.reverse();

  chassi_revertido.push(bloco_1_revertido.join(""));
  chassi_revertido.push(bloco_2_revertido.join(""));
  chassi_revertido.push(bloco_3_revertido.join(""));

  return chassi_revertido.join("");
}

const a = criptografarChassi(chassi);

const b = descriptografarChassi(a);



