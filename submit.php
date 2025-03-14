<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blog_escolar";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Insertar los datos recibidos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $maestro = $_POST['maestro'];
    $comentario = $_POST['comentario'];
    $calificacion = $_POST['calificacion'];

    $sql = "INSERT INTO opiniones (maestro, comentario, calificacion) VALUES ('$maestro', '$comentario', '$calificacion')";

    if ($conn->query($sql) === TRUE) {
        echo "Nuevo registro creado correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
