<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    //get input
    $input = json_decode(file_get_contents("php://input"));
    $from = $input->from;
    $to = $input->to;
    $subject = $input->subject;
    $message = $input->message;
    $attachment_filename = $input->attachment_filename;

    if (true) {
        //response
        $response = [
            "message" => "Success"
        ]; 
        api_response_success($response);
    } else {
        api_response_bad_request("Send email failed");
    }
?>