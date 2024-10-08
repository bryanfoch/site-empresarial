<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = array();

    // Validar o nome
    if (empty($_POST['name'])) {
        $errors[] = "O campo Nome é obrigatório.";
    } else {
        $nome = addslashes($_POST['name']);
    }

    // Validar o e-mail
    if (empty($_POST['email'])) {
        $errors[] = "O campo E-mail é obrigatório.";
    } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "O E-mail inserido não é válido.";
    } else {
        $email = addslashes($_POST['email']);
    }

    // Validar o telefone
    if (empty($_POST['phone'])) {
        $errors[] = "O campo Telefone é obrigatório.";
    } else {
        $telefone = $_POST['phone'];
        $telefone = preg_replace("/[^0-9]/", "", $telefone); // Remove caracteres não numéricos
        $telefone = substr_replace($telefone, '-', -4, 0); // Insere hífen antes dos últimos 4 dígitos
        $telefone = preg_replace("/^(\d{2})(\d{4,5})(\d{4})$/", "($1) $2-$3", $telefone); // Formata o DDD e o telefone
    }    

    // Validar a mensagem
    if (empty($_POST['message'])) {
        $errors[] = "O campo Mensagem é obrigatório.";
    } else {
        $mensagem = addslashes($_POST['message']);
    }

    // Se não houver erros, envie o e-mail
    if (empty($errors)) {
        $to = "bryanfoch123@gmail.com";
        $subject = "Contato - Site Exemplo";
        $body = "Nome: " . $nome . "\r\n" .
                "Telefone: " . $telefone . "\r\n" .
                "Email: " . $email . "\r\n" .
                "Mensagem: " . $mensagem;
        $header = "From: remetente@exemplo.com" . "\r\n" .
                  "Reply-to: " . $email . "\r\n" .
                  "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $body, $header)) {
            echo "Email enviado com Sucesso!";
        } else {
            echo "O Email não pode ser enviado";
        }
    } else {
        // Exibir erros encontrados
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>
