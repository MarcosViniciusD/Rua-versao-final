<?php
// Incluir a biblioteca Simple HTML DOM
include('simple_html_dom.php');

// URL da página
$url = 'https://www.ieprev.com.br/conteudo/categoria/4';

// Faz a requisição para a página
$html = file_get_html($url);

// Encontra todos os links
$lista_noticias = $html->find('a.link_conteudo');
// Configuração da conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "noticias";

// Cria conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Itera sobre as notícias e insere no banco de dados
foreach ($lista_noticias as $noticia) {
    // Decodifica as entidades HTML no título
    $titulo = html_entity_decode($noticia->plaintext);
    $link = $noticia->href;

    // Verifica se os dados já existem no banco de dados antes de inseri-los novamente
    $sql_check = "SELECT COUNT(*) as total FROM dados_site WHERE titulo = ? OR link = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("ss", $titulo, $link);
    $stmt_check->execute();
    $result_check = $stmt_check->get_result();
    $row = $result_check->fetch_assoc();
    if ($row['total'] == 0) {
        // Prepara a query
        $stmt_insert = $conn->prepare("INSERT INTO dados_site (titulo, link) VALUES (?, ?)");
        $stmt_insert->bind_param("ss", $titulo, $link);
        // Executa a query de inserção
        $stmt_insert->execute();
    }
}

// Fecha a conexão com o banco de dados
$conn->close();
?>
