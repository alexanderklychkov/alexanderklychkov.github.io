<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>SendME</title>

    <!-- Bootstrap -->
    <link href="css/style.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  	<header class="page-header">
  		<div class="container">
  			<div class="header-top clearfix">
  				<div class="header-logo">
  					<img src="img/logo.png" alt="">
  				</div>
  				<div class="header-reg">
  					<ul class="header-reg-list">
  						<li class="header-reg-list-item"><a class="btn-enter" href="#">Вход</a></li>
  						<li class="header-reg-list-item"><a class="btn-reg" href="#">Регистрация</a></li>
  					</ul>
  				</div>
  			</div>
  		</div>
  	</header>

  	<main>
  		<div class="container">
  			<div class="main-page">
  				<div class="main-letter">
  					<p><img src="img/index/letter.png" alt=""></p>
  				</div>
  				<div class="main-text">
  					<h1>Send<span class="red">ME</span> - социальная сеть<br> для тех, кто любит<br> простоту!</h1>
  				</div>
  				<div class="main-it">
  					<img src="img/index/tech.png" alt="">
  				</div>
  			</div>
  		</div>
  	</main>

  	<footer class="page-footer">
  		<div class="container">
  			<div class="footer-copyright">
  				<p>SendME &copy 2018</p>
  			</div>
  		</div>
  	</footer>

  	<!-- Modal Window -->
  	<div class="overlay js-overlay">
  	    <div class="popup js-popup">
  	    	<p><img src="img/min-logo.png" alt=""></p>
  	        <h2>Авторизация</h2>
  	        <form class="login" method="post" action>
  	        	<input class="field" type="text" name="login" placeholder="Логин">
  	        	<input class="field" type="password" name="password" placeholder="Пароль"><br>
  	        	<input class="check" id="checkBox" type="checkbox"><label class="smile" for="checkBox">Запомнить меня?</label><br>
  	        	<input class="btn" type="submit" name="button" value="Войти"><br>
  	        	<a class="forgot" href="#">Забыли пароль?</a>

  	        </form>
  	        <div class="close-popup js-close"></div>
  	    </div>
  	</div>

  	<!-- Modal Window2 -->
  	<div class="overlay js-overlay2">
  	    <div class="popup js-popup2">
  	    	<p><img src="img/min-logo.png" alt=""></p>
  	        <h2>Регистрация</h2>
  	        <p>В разработке...</p>
  	        <!-- <form class="login" method="post" action>
  	        	<input class="field" type="text" name="login" placeholder="Логин">
  	        	<input class="field" type="password" name="password" placeholder="Пароль"><br>
  	        	<input class="check" id="checkBox" type="checkbox"><label class="smile" for="checkBox">Запомнить меня?</label><br>
  	        	<input class="btn" type="submit" name="button" value="Войти"><br>
  	        	<a class="forgot" href="#">Забыли пароль?</a>

  	        </form> -->
  	        <div class="close-popup js-close2"></div>
  	    </div>
  	</div>
	
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="js/modal.js"></script>
	<script src="js/modal2.js"></script>
  	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>