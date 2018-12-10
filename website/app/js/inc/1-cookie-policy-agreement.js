/* 0-cookie.js requires */

window.addEventListener('load', function(){
	var
		agreementMsg      = document.querySelector('#js-cookiePolicy'),
		agreementBtn      = document.querySelector('#js-cookiePolicy .btn'),
		agreementCookie   = 'policy';

		if (agreementMsg && agreementBtn){
			if(!getCookie(agreementCookie))
				agreementMsg.style.display = 'block';

			agreementBtn.addEventListener('click', function(){
				var date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
				document.cookie = agreementCookie+'=true; expires=' + date.toUTCString();
				agreementMsg.style.display = 'none';
			});
		}

		console.log(getCookie(agreementCookie));
}, false);