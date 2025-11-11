function status(request, response) {
  response.status(200).json({ chave: "Alunos curso.dev" });
}

export default status;
