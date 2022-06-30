function clock () {
    setInterval(() => {
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let milliseconds = document.getElementById('milliseconds');
        let ampm = document.getElementById('ampm');

        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');
        let ml = document.getElementById('ml');

        let hr_dot = document.querySelector('.hr_dot');
        let min_dot = document.querySelector('.min_dot');
        let sec_dot = document.querySelector('.sec_dot');
        let milli_dot = document.querySelector('.milli_dot');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let mll = new Date().getMilliseconds();
        let am = h >= 12 ? "PM" : "AM";
    
        //Converte de relógio 24h para relógio 12h
        /* 
        if (h > 12){
            h = h - 12;
        }
        */
    
        //Adiciona o "0" antes de um número simples
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        mll = (mll < 10) ? "0" + mll : mll;

        hours.innerHTML = h + ("<br><span>Horas</span>");
        minutes.innerHTML = m + ("<br><span>Minutos</span>");
        seconds.innerHTML = s + ("<br><span>Segundos</span>");
        milliseconds.innerHTML = mll + ("<br><span>Milisegundos</span>");;
        ampm.innerHTML = am;

        hh.style.strokeDashoffset = 440 - (440 * h) / 24;
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;
        ml.style.strokeDashoffset = 400 - (400 * mll) / 60;

        hr_dot.style.transform = `rotate(${h * 15}deg)`;
        min_dot.style.transform = `rotate(${m * 6}deg)`;
        sec_dot.style.transform = `rotate(${s * 6}deg)`;
        milli_dot.style.transform = `rotate(${mll * 6}deg)`;
    })
}