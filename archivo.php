<?php
$servername = "localhost";
$username = "root";
$password = "ezequiel417";
$dbname = "biblioteca_sagarna";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Establecer encabezados para permitir el acceso desde cualquier origen (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Inicializar array para almacenar los datos
$data = array();

// Consulta SQL
$sql = "SELECT idLibro, libTitulo FROM libros";
$result = $conn->query($sql);

// Manejar errores de la consulta
if (!$result) {
    die("Error en la consulta: " . $conn->error);
}

// Obtener resultados
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Enviar datos como JSON
echo json_encode($data);

// Cerrar conexión
$conn->close();
?>
