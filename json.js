document.getElementById('input-arquivo').addEventListener('change', function(evento) {
  const arquivo = evento.target.files[0];
  if (!arquivo) return;

  const leitor = new FileReader();
  leitor.onload = function(e) {
    const dados = new Uint8Array(e.target.result);
    const planilha = XLSX.read(dados, { type: 'array' });

    // Pega a primeira aba da planilha
    const nomePrimeiraAba = planilha.SheetNames[0];
    const jsonDados = XLSX.utils.sheet_to_json(planilha.Sheets[nomePrimeiraAba]);

    console.log('Dados importados:', jsonDados);
  };
  leitor.readAsArrayBuffer(arquivo);
});
