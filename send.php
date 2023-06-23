<?php

$email = $_POST['email'];
$text = $_POST['text'];
$phone = $_POST['phone'];
// $text = $_POST['textarea'];

$token = "6095975179:AAE6e7EyMla0yNJrFIdo5z09IKqbl8Nkpjk"; // Токен телеграм бота


$chat_id = "-910429549";  // Идентификатор чата
// $chat_id2 = "CHAT_ID2";  // Дополнительный идентификатор чата

$arr = array(
    // 'Имя пользователя: ' => $name,
    'Почта: ' => $email,
    'Вопрос: ' => $text,
    'Телефон: ' => $phone,
    // 'Письмо: ' => $text,
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
// $sendToTelegram2 = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id2}&parse_mode=html&text={$txt}", "r");


// if ($sendToTelegram) {
//     // sleep(5);
//     ob_start();
//     $new_url = 'https://t.me/+oh7s4EQp0oQzM2Yy';
//     header('Location: ' . $new_url);
//     ob_end_flush();
// } else {
//     // sleep(5);
//     echo "Error";
// }
