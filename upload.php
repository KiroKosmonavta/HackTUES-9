<?php
if (isset($_POST['submit'])){
    $file = $_FILES['file'];

    $fileName = $_FILES['files']['name'];
    $fileTmpName = $_FILES['files']['tmp_name'];
    $fileSize = $_FILES['files']['size'];
    $fileError = $_FILES['files']['error'];
    $fileType = $_FILES['files']['type'];

    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    $allowed = array('jpg', 'jpeg', 'png', 'pdf', );

    if (in_array($fileActualExt, $allowed)) {
        if ($fileError === 0) {
            if ($fileSize < 1000000) {
                $fileNameNew = uniqid('', true).".".$fileActualExt;

                $fileDestination = 'uploads/'.$fileNameNew
                move_uploaded_file($fileTmpName, $fileDestination);
                header("Location: cvform.html?uploadsuccess");
            }else{
                echo "Файлът, който се опитвате да приложите, е прекалено голям!"
            }
        }else{
            echo "Имаше грешка в прилагането на файла Ви!";
        }
    } else{
        echo "Не можеш да прилагаш файлове в такъв формат!";
    }
}