import React from 'react'
import NextHead from 'next/head'
import chat from './helper/chat';


 const Head = () => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>Jomed Pharmacy</title> 
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content= "Jomed pharmacy is one of the top providers of pharmaceutical products and health care service in Agege, Lagos, Nigeria" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
    <link rel="icon" href="/favicon.jpg" sizes="16x16" type="image/png" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </NextHead>
)

export default Head;
