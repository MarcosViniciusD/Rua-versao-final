<?php
include ('conexao.php');
$limit = 9;
$sql_noticias_query = "SELECT * FROM dados_site LIMIT {$limit}";
$sql_noticias_query_exec = $conn->query($sql_noticias_query) or die ($conn->error);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rua Advogados Associados</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;1,100;1,300&family=Sora:wght@200;300;400;500;600&display=swap" rel="stylesheet">
    <link rel="icon" href="../image/Símbol.svg" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="../assets/css/style1.css">
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ETWCSD08GQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ETWCSD08GQ');
</script>
</head>
<body>
    <header>
        <nav>
            <a class="logo" href="/"> <img src="../image/logo.png"></a>
            <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-list">
                <li class="first-li"><a href="/ritgh.html">Quem somos</a></li>
                <li><a href="/left.html">Áreas de Atuação </a></li>
                <li><a href="/processo.html">Seu Processo</a></li>
                <li><a href="/feed/blog.php">Blog</a></li>
                <li><a href="/lgpd.html">Dúvidas</a></li>
            </ul>
        </nav>
    </header>
    <section class="banner-blog2">
          <div class="banner-blog-content">
              <h2>Blog</h2>
              <p>Acompanhe nossos artigos mais recentes sobre os <br> acontecimentos importantes do meio jurídico</p>
              
          </div>
      </section>
    <div class="noticias_grupo">
        <div class="div_noticias">
            <?php
                $counter = 1; // Inicialize um contador
                $grupo = 1; // Inicialize um contador para o grupo
                
                

                while($dados_site = $sql_noticias_query_exec->fetch_assoc()) {
                    if ($counter % 3 == 1) {
                        // Se o contador for divisível por 3 (ou seja, a primeira notícia de um novo grupo de três)
                        // Fecha a div anterior e abre uma nova
                        if ($counter != 1) {
                            echo "</div>"; // Fecha a div anterior, exceto na primeira iteração
                        }
                        // Crie um nome diferente para cada classe de grupo
                        $classe_grupo = "grupo_noticias" . $grupo;
                        echo "<div class='$classe_grupo'>"; // Abre uma nova div com a classe do grupo
                        $grupo++; // Incrementa o contador de grupos
                    }
                    $class = "noticia_blog_" . $counter; // Crie o nome da classe usando o contador
                    
                    // Separa a data do texto completo
                    preg_match('/(\d{1,2}\/\d{1,2}\/\d{4})/', $dados_site['titulo'], $matches);
                    $data = $matches[0]; // A primeira correspondência é a data
                    $texto = str_replace($data, '', $dados_site['titulo']); // Remova a data do texto completo
                    
                    // Verifica se o ano é 2024
                    $ano = explode("/", $data)[2]; // O ano é a terceira parte da data
                    ?>

<h4 class="<?php echo $class; ?>">
    <span class="data"><?php echo $data; ?><?php if ($ano == '2024') { echo "<span class='adicional'></span>"; } ?></span>
    <span class="texto"><?php echo $texto; ?></span>
</h4>

<?php
                    $counter++; // Incremente o contador para a próxima notícia
                }
                
                // Fecha a div final, caso existam notícias não fechadas
                if (($counter - 1) % 3 != 0) {
                    echo "</div>"; // Fecha a div final, se necessário
                }
                ?>
            </div>
        </div>
            </div>
        <footer class="footer-distributed">
        <div class="footer-left">
            <img src="../image/logo.png" alt="" width="230" height="130">
            <p class="footer-links">
                <a href="/index.html">Mapa do Site</a> ·
                <a href="/index.html">Home</a> ·
                <a href="/left.html">Quem Somos</a> ·
                <a href="/ritgh.html">Áreas de Atuação</a> ·
                <a href="/blog.html">Blog</a> ·
                <a href="/processo.html">Seu Processo</a>
            </p> 
            <p class="footer-company-name">Rua Advogados Associados |Todos os direitos reservados | 2023</p>
        </div>
        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Unidade em Diadema:</span></p>
            </div>
            <div>
                <i class="fa fa-phone"></i>
                <p>(11) 2897-9946 / (11) 97885-7010</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">contato@ruaadvogados.com.br</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>Acompanhe nas redes sociais</span> 
                <div class="footer-icons">
                    <a href="https://www.facebook.com/rua.adv/"><img src="../image/Facebook.png" alt="Facebook" width="35" height="35"></a>
                    <a href="https://www.instagram.com/rua_advogados/"><img src="../image/IG.png" alt="Instagram" width="35" height="35"></a>
                    <a href="https://br.linkedin.com/company/rua-advogados-associados"><img src="../image/Linkedin.png" alt="LinkedIn" width="35" height="35"></a>
                </div>
            </p>
        </div>
    </footer>

    <script src="assets/js/nslider.js"></script>
    <script src="assets/js/navbar.js"></script>
</body>
</html>
