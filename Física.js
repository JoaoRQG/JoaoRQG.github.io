// HTML5, W3.CSS
function w3_show_nav(name) {
    document.getElementById("menuCin").style.display = "none";
    document.getElementById("menuDi").style.display = "none";
    document.getElementById("menuTEP").style.display = "none";
    document.getElementById("menuHd").style.display = "none";
    document.getElementById("menuGU").style.display = "none";
    document.getElementById("menuTT").style.display = "none";
    document.getElementById("menuOd").style.display = "none";
    document.getElementById("menuEl").style.display = "none";
    document.getElementById("menuEt").style.display = "none";
    document.getElementById(name).style.display = "block";
    w3-open();
  }

// Movimento Retilíneo
function MRU() {
    console.log('MRU');
    var s = Number.parseFloat(document.getElementById('s').value);
    var v = Number.parseFloat(document.getElementById('v').value);
    var t = Number.parseFloat(document.getElementById('t').value);
    var S = Number.parseFloat(document.getElementById('S').value);
    var resp = MRU2(s, v, t, S);
    console.log (resp);
    document.getElementById('MRU').innerHTML = " " + resp;
    }
function MRU2(s, v, t, S) {
    if (s && v && t && S)
        return ' s = ' + s + ' , v = ' + v + ' , t = ' + t + ' e S = ' + S
    else if (!s && v && t && S)
        return ' s = ' + Math.floor (S - (v * t)) + ' , v = ' + v + ' , t = ' + t + ' e S = ' + S
    else if (!v && s && t && S)
        return ' v = ' + Math.floor ((S - s) / t) + ' , s = ' + s + ' , t = ' + t + ' e S = ' + S  
    else if (!t && s && v && S)
        return ' t = ' + Math.floor ((S - s) / v) + ' , s = ' + s + ' , v = ' + v + ' e S = ' + S  
    else if (!S && s && v && t)
        return ' S = ' + Math.floor (s + (v * t)) + ' , s = ' + s + ' , v = ' + v + ' e t = ' + t 
}

// Movimento Retilíneo Uniformemente Varaido
function MRUV() {
    console.log('MRUV');
    var a = Number.parseFloat(document.getElementById('a').value);
    var b = Number.parseFloat(document.getElementById('b').value);
    var c = Number.parseFloat(document.getElementById('c').value);
    var d = Number.parseFloat(document.getElementById('d').value);
    var E = Number.parseFloat(document.getElementById('E').value);
    var resp = MRUV2(a, b, c, d, E);
    console.log (resp);
    document.getElementById('MRUV').innerHTML = " " + resp;
    }
function MRUV2(a, b, c, d, E) {
    if (a && b && c && d && E)
        return ' s = ' + a + ' , v = ' + b + ' , t = ' + c + ' , a = ' + d + ' e S = ' + E
    else if (!a && b && c && d && E)
        return ' s = ' + Math.floor (E - (b * c) - (d * (Math.pow(c , 2) / 2))) + ' , v = ' + b + ' , t = ' + c + ' , a = ' + d + ' e S = ' + E
    else if (!b && a && c && d && E)
        return ' v = ' + Math.floor (E - a - (d * (Math.pow(c , 2) / 2 ))) / c + ' , s = ' + a + ' , t = ' + c + ' , a = ' + d + ' e S = ' + E
    else if (!b && a == 0 && c && d && E)
        return ' v = ' + Math.floor (E - 0 - (d * (Math.pow(c , 2) / 2 ))) / c + ' , s = ' + a + ' , t = ' + c + ' , a = ' + d + ' e S = ' + E
    else if (!d && a && b && c && E)
        return ' a = ' + Math.floor (E - a - (b * c)) * 2 / Math.pow(c , 2) + ' , s = ' + a + ' , v = ' + b + ' , t = ' + c + ' e S = ' + E  
    else if (!d && a == 0 && b && c && E)  
        return ' a = ' + Math.floor (E - 0 - (b * c)) * 2 / Math.pow(c , 2) + ' , s = ' + a + ' , v = ' + b + ' , t = ' + c + ' e S = ' + E
    else if (!E && a && b && c && d)
        return ' S = ' + Math.floor (a + (b * c) + (d * (Math.pow(c , 2)) / 2)) + ' , s = ' + a + ' , v = ' + b + ' , t = ' + c + ' e a = ' + d 
    else if (a == 0)  
        return ' S = ' + Math.floor (0 + (b * c) + (d * (Math.pow(c , 2)) / 2)) + ' , s = ' + a + ' , v = ' + b + ' , t = ' + c + ' e a = ' + d 
}

function MRUVV() {
    console.log('MRUVV');
    var f = Number.parseFloat(document.getElementById('f').value);
    var g = Number.parseFloat(document.getElementById('g').value);
    var h = Number.parseFloat(document.getElementById('h').value);
    var I = Number.parseFloat(document.getElementById('I').value);
    var resp = MRUV3(f, g, h, I);
    console.log (resp);
    document.getElementById('MRUVV').innerHTML = " " + resp;
    }
function MRUV3(f, g, h, I) {
    if (f && g && h && I)
        return ' v = ' + f + ' , a = ' + g + ' , t = ' + h + ' e V = ' + I
    else if (!f && g && h && I)
        return ' v = ' + Math.floor (I - (g * h)) + ' , a = ' + g + ' , t = ' + h + ' e V = ' + I
    else if (!g && f && h && I)
        return ' a = ' + Math.floor ((I - f) / h) + ' , v = ' + f + ' , t = ' + h + ' e V = ' + I  
    else if (!h && f && g && I)
        return ' t = ' + Math.floor ((I - f) / g) + ' , v = ' + f + ' , a = ' + g + ' e V = ' + I  
    else if (!I && f && g && h)
        return ' V = ' + Math.floor (f + (g * h)) + ' , v = ' + f + ' , a = ' + g + ' e t = ' + h 
}

function MRUVVV() {
    console.log('MRUVVV');
    var j = Number.parseFloat(document.getElementById('j').value);
    var k = Number.parseFloat(document.getElementById('k').value);
    var l = Number.parseFloat(document.getElementById('l').value);
    var M = Number.parseFloat(document.getElementById('M').value);
    var resp = MRUV4(j, k, l, M);
    console.log (resp);
    document.getElementById('MRUVVV').innerHTML = " " + resp;
    }
function MRUV4(j, k, l, M) {
    if (j && k && l && M)   
        return ' v = ' + j + ' , a = ' + k + ' , ∆s = ' + l + ' ,  V = ' + M
    else if (!j && k && l && M)
        return ' v = ' + Math.floor (Math.sqrt (Math.pow(M , 2) - (2 * k * l))) + ' , a = ' + k + ' , ∆s = ' + l + ' e V = ' + M
    else if (!j && k && l && M == 0)
        return ' v = ' + Math.floor (Math.sqrt (Math.pow(0 , 2) - (2 * k * l))) + ' , a = ' + k + ' , ∆s = ' + l + ' e V = ' + M
    else if (!k && j && l && M)
        return ' a = ' + Math.floor (Math.pow(M , 2) - Math.pow(j , 2)) / l / 2 + ' , v = ' + j + ' , ∆s = ' + l + ' e V = ' + M  
    else if (!k && j == 0 && l && M)
        return ' a = ' + Math.floor (Math.pow(M , 2) - Math.pow(0 , 2)) / l / 2 + ' , v = ' + j + ' , ∆s = ' + l + ' e V = ' + M
    else if (!k && j && l && M == 0)
        return ' a = ' + Math.floor (Math.pow(0 , 2) - Math.pow(j , 2)) / l / 2 + ' , v = ' + j + ' , ∆s = ' + l + ' e V = ' + M
    else if (!l && j && k && M)
        return ' ∆s = ' + Math.floor (Math.pow(M , 2) - Math.pow(j , 2)) / k / 2 + ' , v = ' + j + ' , a = ' + k + ' e V = ' + M 
    else if (!l && j == 0 && k && M)
        return ' ∆s = ' + Math.floor (Math.pow(M , 2) - Math.pow(0 , 2)) / k / 2 + ' , v = ' + j + ' , a = ' + k + ' e V = ' + M
    else if (!l && j && k && M == 0)
        return ' ∆s = ' + Math.floor (Math.pow(0 , 2) - Math.pow(j , 2)) / k / 2 + ' , v = ' + j + ' , a = ' + k + ' e V = ' + M
    else if (!M && j && k && l)
        return ' V = ' + Math.floor (Math.sqrt (Math.pow(j , 2) + (2 * k * l))) + ' , a = ' + k + ' , a = ' + k + ' , ∆s = ' + l
    else if (!M && j == 0 && k && l)
        return ' V = ' + Math.floor (Math.sqrt (Math.pow(0 , 2) + (2 * k * l))) + ' , a = ' + k + ' , a = ' + k + ' , ∆s = ' + l
}

// Movimento Circular Uniforme
function MCU() {
    console.log('MCU');
    var n = Number.parseFloat(document.getElementById('n').value);
    var o = Number.parseFloat(document.getElementById('o').value);
    var P = Number.parseFloat(document.getElementById('P').value);
    var resp = MCU2(n, o, P);
    console.log (resp);
    document.getElementById('MCU').innerHTML = " " + resp;
    }
function MCU2(n, o, P) {
    if (n && o && P)
        return ' ω = ' + n + ' , r = ' + o + ' e V = ' + P
    else if (!n && o && P)
        return ' ω = ' + Math.floor (P / o) + ' , r = ' + o + ' , V = ' + P
    else if (!o && n && P)
        return ' r = ' + Math.floor (P / n) + ' , ω = ' + n + ' , V = ' + P
    else if (!P && n && o)
        return ' V = ' + Math.floor (n * o) + ' , ω = ' + o + ' , r = ' + o
}

function MCUU() {
    console.log('MCUU');
    var q = Number.parseFloat(document.getElementById('q').value);
    var R = Number.parseFloat(document.getElementById('R').value);
    var resp = MCU3(q, R);
    console.log (resp);
    document.getElementById('MCUU').innerHTML = " " + resp;
    }
function MCU3(q, R) {
    if (q && R)
        return ' f = ' + q + ' , ω = ' + R
    else if (!q && R)
        return ' f = ' + Math.floor (R / (2 * 3.14)) + ' , ω = ' + R
    else if (!R && q)
        return ' ω = ' + Math.floor (2 * 3.14 * q) + ' , f = ' + q
}

function MCUUU() {
    console.log('MCUUU');
    var u = Number.parseFloat(document.getElementById('u').value);
    var V = Number.parseFloat(document.getElementById('V').value);
    var resp = MCU4(u, V);
    console.log (resp);
    document.getElementById('MCUUU').innerHTML = " " + resp;
    }
function MCU4(u, V) {
    if (u && V)
        return ' f = ' + u + ' , T = ' + V
    else if (!u && V)
        return ' f = ' + Math.floor (1 / V) + ' , T = ' + V
    else if (!V && u)
        return ' T = ' + Math.floor (1 / u) + ' , f = ' + u
}

function MCUUUU() {
    console.log('MCUUUU');
    var w = Number.parseFloat(document.getElementById('w').value);
    var x = Number.parseFloat(document.getElementById('x').value);
    var Y = Number.parseFloat(document.getElementById('Y').value);
    var resp = MCU5(w, x, Y);
    console.log (resp);
    document.getElementById('MCUUUU').innerHTML = " " + resp;
    }
function MCU5(w, x, Y) {
    if (w && x && Y)
        return ' v = ' + w + ' , r = ' + x + ' e a = ' + Y
    else if (!w && x && Y)
        return ' v = ' + Math.floor (Math.sqrt(Y * x)) + ' , r = ' + x + ' e a = ' + Y
    else if (!x && w && Y)
        return ' r = ' + Math.floor (Math.pow(w , 2) / Y) + ' , v = ' + w + ' e a = ' + Y
    else if (!Y && w && x)
        return ' a = ' + Math.floor (Math.pow(w , 2) / x) + ' , v = ' + w + ' e r = ' + x
}

// Dinâmica
function DN() {
    console.log('DN');
    var a_str = Number.parseFloat(document.getElementById('a_str').value);
    var b_str = Number.parseFloat(document.getElementById('b_str').value);
    var c_str = Number.parseFloat(document.getElementById('c_str').value);
    var resp = DN2(a_str, b_str, c_str);
    console.log (resp);
    document.getElementById('DN').innerHTML = " " + resp;
    }
function DN2(a_str, b_str, c_str) {
    if (a_str && b_str && c_str)
        return ' m = ' + a_str + ' , a = ' + b_str + ' e F = ' + c_str
    else if (!a_str && b_str && c_str)
        return ' m = ' + Math.floor (c_str / b_str) + ' , a = ' + b_str + ' e F = ' + c_str
    else if (!b_str && a_str && c_str)
        return ' a = ' + Math.floor (c_str / a_str) + ' , m = ' + a_str + ' e F = ' + c_str
    else if (!c_str && a_str && b_str)
        return ' F = ' + Math.floor (a_str * b_str) + ' , m = ' + a_str + ' e a = ' + b_str
}

function DNN() {
    console.log('DNN');
    var d_str = Number.parseFloat(document.getElementById('d_str').value);
    var e_str = Number.parseFloat(document.getElementById('e_str').value);
    var f_str = Number.parseFloat(document.getElementById('f_str').value);
    var resp = DN3(d_str, e_str, f_str);
    console.log (resp);
    document.getElementById('DNN').innerHTML = " " + resp;
    }
function DN3(d_str, e_str, f_str) {
    if (d_str && e_str && f_str)
        return ' m = ' + d_str + ' , g = ' + e_str + ' e P = ' + f_str
    else if (!d_str && e_str && f_str)
        return ' m = ' + Math.floor (f_str / e_str) + ' , g = ' + e_str + ' e P = ' + f_str
    else if (!e_str && d_str && f_str)
        return ' g = ' + Math.floor (f_str / d_str) + ' , m = ' + d_str + ' e P = ' + f_str
    else if (!f_str && d_str && e_str)
        return ' P = ' + Math.floor (d_str * e_str) + ' , m = ' + d_str + ' e g = ' + e_str
}

function DNNN() {
    console.log('DNNN');
    var g_str = Number.parseFloat(document.getElementById('g_str').value);
    var h_str = Number.parseFloat(document.getElementById('h_str').value);
    var i_str = Number.parseFloat(document.getElementById('i_str').value);
    var resp = DN4(g_str, h_str, i_str);
    console.log (resp);
    document.getElementById('DNNN').innerHTML = " " + resp;
    }
function DN4(g_str, h_str, i_str) {
    if (g_str && h_str && i_str)
        return ' µ = ' + g_str + ' , N = ' + h_str + ' e F = ' + i_str
    else if (!g_str && h_str && i_str)
        return ' µ = ' + Math.floor (i_str / h_str) + ' , N = ' + h_str + ' e F = ' + i_str
    else if (!h_str && g_str && i_str)
        return ' N = ' + Math.floor (i_str / g_str) + ' , µ = ' + g_str + ' e F = ' + i_str
    else if (!i_str && g_str && h_str)
        return ' F = ' + Math.floor (g_str * h_str) + ' , µ = ' + g_str + ' e N = ' + h_str
}

function DNNNN() {
    console.log('DNNNN');
    var j_str = Number.parseFloat(document.getElementById('j_str').value);
    var k_str = Number.parseFloat(document.getElementById('k_str').value);
    var l_str = Number.parseFloat(document.getElementById('l_str').value);
    var resp = DN5(j_str, k_str, l_str);
    console.log (resp);
    document.getElementById('DNNNN').innerHTML = " " + resp;
    }
function DN5(j_str, k_str, l_str) {
    if (j_str && k_str && l_str)
        return ' k = ' + j_str + ' , x = ' + k_str + ' e F = ' + l_str
    else if (!j_str && k_str && l_str)
        return ' k = ' + Math.floor (l_str / k_str) + ' , x = ' + k_str + ' e F = ' + l_str
    else if (!k_str && j_str && l_str)
        return ' x = ' + Math.floor (l_str / j_str) + ' , k = ' + j_str + ' e F = ' + l_str
    else if (!l_str && j_str && k_str)
        return ' F = ' + Math.floor (j_str * k_str) + ' , k = ' + j_str + ' e x = ' + k_str
}

// Trabalho, Energia e Potência
function TEP() {
    console.log('TEP');
    var m_str = Number.parseFloat(document.getElementById('m_str').value);
    var n_str = Number.parseFloat(document.getElementById('n_str').value);
    var o_str = Number.parseFloat(document.getElementById('o_str').value);
    var p_str = Number.parseFloat(document.getElementById('p_str').value);
    var resp = TEP2(m_str, n_str, o_str, p_str);
    console.log (resp);
    document.getElementById('TEP').innerHTML = " " + resp;
    }
function TEP2(m_str, n_str, o_str, p_str) {
    if (m_str && n_str && o_str && p_str)
        return ' F = ' + m_str + ' , d = ' + n_str + ' , θ = ' + o_str + ' e T = ' + p_str
    else if (!m_str && n_str && o_str && p_str)
        return ' F = ' + Math.ceil (p_str / (n_str * Math.cos(o_str * Math.PI / 180))) + ' , d = ' + n_str + ' , θ = ' + o_str + ' e T = ' + p_str
    else if (!n_str && m_str && o_str && p_str)
        return ' d = ' + Math.ceil (p_str / (m_str * Math.cos(o_str * Math.PI / 180))) + ' , F = ' + m_str + ' , θ = ' + o_str + ' e T = ' + p_str
    else if (!p_str && m_str && n_str && o_str)
        return ' T = ' + Math.floor (m_str * (n_str * Math.cos(o_str * Math.PI / 180))) + ' , F = ' + m_str + ' , d = ' + n_str + ' e θ = ' + o_str
}

function TEPP() {
    console.log('TEPP');
    var q_str = Number.parseFloat(document.getElementById('q_str').value);
    var r_str = Number.parseFloat(document.getElementById('r_str').value);
    var s_str = Number.parseFloat(document.getElementById('s_str').value);
    var resp = TEP3(q_str, r_str, s_str);
    console.log (resp);
    document.getElementById('TEPP').innerHTML = " " + resp;
    }
function TEP3(q_str, r_str, s_str) {
    if (q_str && r_str && s_str)
        return ' m = ' + q_str + ' , v = ' + r_str + ' e E = ' + s_str 
    else if (!q_str && r_str && s_str)
        return ' m = ' + Math.floor (s_str * 2 / Math.pow(r_str , 2)) + ' , v = ' + r_str + ' e E = ' + s_str
    else if (!r_str && q_str && s_str)
        return ' v = ' + Math.floor (Math.sqrt(s_str * 2 / q_str)) + ' , m = ' + q_str + ' e E = ' + s_str
    else if (!s_str && r_str && q_str)
        return ' E = ' + Math.floor (q_str * Math.pow(r_str , 2) / 2) + ' , m = ' + q_str + ' e v = ' + r_str
}

function TEPPP() {
    console.log('TEPPP');
    var t_str = Number.parseFloat(document.getElementById('t_str').value);
    var u_str = Number.parseFloat(document.getElementById('u_str').value);
    var v_str = Number.parseFloat(document.getElementById('v_str').value);
    var w_str = Number.parseFloat(document.getElementById('w_str').value);
    var resp = TEP4(t_str, u_str, v_str, w_str);
    console.log (resp);
    document.getElementById('TEPPP').innerHTML = " " + resp;
    }
function TEP4(t_str, u_str, v_str, w_str) {
    if (t_str && u_str && v_str && w_str)
        return ' m = ' + t_str + ' , g = ' + u_str + ' , h = ' + v_str + ' e E = ' + w_str 
    else if (!t_str && u_str && v_str && w_str)
        return ' m = ' + Math.floor (w_str / (u_str * v_str)) + ' , g = ' + u_str + ' , h = ' + v_str + ' e E = ' + w_str
    else if (!u_str && t_str && v_str && w_str)
        return ' g = ' + Math.floor (w_str / (t_str * v_str)) + ' , m = ' + t_str + ' , h = ' + v_str + ' e E = ' + w_str
    else if (!v_str && t_str && u_str && w_str)
        return ' h = ' + Math.floor (w_str / (t_str * u_str)) + ' , m = ' + t_str + ' , g = ' + u_str + ' e E = ' + w_str
    else if (!w_str && t_str && u_str && v_str)
        return ' E = ' + Math.floor (t_str * u_str * v_str) + ' , m = ' + t_str + ' , g = ' + u_str + ' e h = ' + v_str 
}

function TEPPPP() {
    console.log('TEPPPP');
    var x_str = Number.parseFloat(document.getElementById('x_str').value);
    var y_str = Number.parseFloat(document.getElementById('y_str').value);
    var z_str = Number.parseFloat(document.getElementById('z_str').value);
    var resp = TEP5(x_str, y_str, z_str);
    console.log (resp);
    document.getElementById('TEPPPP').innerHTML = " " + resp;
    }
function TEP5(x_str, y_str, z_str) {
    if (x_str && y_str && z_str)
        return ' m = ' + x_str + ' , v = ' + y_str + ' e E = ' + z_str 
    else if (!x_str && y_str && z_str)
        return ' m = ' + Math.floor (z_str * 2 / Math.pow(y_str , 2)) + ' , v = ' + y_str + ' e E = ' + z_str
    else if (!y_str && x_str && z_str)
        return ' v = ' + Math.floor (Math.sqrt(z_str * 2 / x_str)) + ' , m = ' + x_str + ' e E = ' + z_str
    else if (!z_str && y_str && x_str)
        return ' E = ' + Math.floor (x_str * Math.pow(y_str , 2) / 2) + ' , m = ' + x_str + ' e v = ' + y_str
}

function TEPPPPP() {
    console.log('TEPPPPP');
    var A_str = Number.parseFloat(document.getElementById('A_str').value);
    var B_str = Number.parseFloat(document.getElementById('B_str').value);
    var C_str = Number.parseFloat(document.getElementById('C_str').value);
    var resp = TEP6(A_str, B_str, C_str);
    console.log (resp);
    document.getElementById('TEPPPPP').innerHTML = " " + resp;
    }
function TEP6(A_str, B_str, C_str) {
    if (A_str && B_str && C_str)
        return ' T = ' + A_str + ' , Δt = ' + B_str + ' e P = ' + C_str
    else if (!A_str && B_str && C_str)
        return ' T = ' + Math.floor (B_str * C_str) + ' , Δt = ' + B_str + ' e P = ' + C_str
    else if (!B_str && A_str && C_str)
        return ' Δt = ' + Math.floor (A_str / C_str) + ' , T = ' + A_str + ' e P = ' + C_str
    else if (!C_str && A_str && B_str)
        return ' P = ' + Math.floor (A_str / B_str) + ' , T = ' + A_str + ' e Δt = ' + B_str
}

// Hidrostática
function HD() {
    console.log('HD');
    var D_str = Number.parseFloat(document.getElementById('D_str').value);
    var E_str = Number.parseFloat(document.getElementById('E_str').value);
    var F_str = Number.parseFloat(document.getElementById('F_str').value);
    var resp = HD2(D_str, E_str, F_str);
    console.log (resp);
    document.getElementById('HD').innerHTML = " " + resp;
    }
function HD2(D_str, E_str, F_str) {
    if (D_str && E_str && F_str)
        return ' F = ' + D_str + ' , A = ' + E_str + ' e p = ' + F_str
    else if (!D_str && E_str && F_str)
        return ' F = ' + Math.floor (E_str * F_str) + ' , A = ' + E_str + ' e p = ' + F_str
    else if (!E_str && D_str && F_str)
        return ' A = ' + Math.floor (D_str / F_str) + ' , F = ' + D_str + ' e p = ' + F_str
    else if (!F_str && D_str && E_str)
        return ' p = ' + Math.floor (D_str / E_str) + ' , F = ' + D_str + ' A = ' + E_str
}

function HDD() {
    console.log('HDD');
    var G_str = Number.parseFloat(document.getElementById('G_str').value);
    var H_str = Number.parseFloat(document.getElementById('H_str').value);
    var I_str = Number.parseFloat(document.getElementById('I_str').value);
    var resp = HD3(G_str, H_str, I_str);
    console.log (resp);
    document.getElementById('HDD').innerHTML = " " + resp;
    }
function HD3(G_str, H_str, I_str) {
    if (G_str && H_str && I_str)
        return ' m = ' + G_str + ' , V = ' + H_str + ' e ρ = ' + I_str
    else if (!G_str && H_str && I_str)
        return ' m = ' + Math.floor (H_str * I_str) + ' , V = ' + H_str + ' e ρ = ' + I_str
    else if (!H_str && G_str && I_str)
        return ' V = ' + Math.floor (G_str / I_str) + ' , m = ' + G_str + ' e ρ = ' + I_str
    else if (!I_str && G_str && H_str)
        return ' ρ = ' + Math.floor (G_str / H_str) + ' , m = ' + G_str + ' V = ' + H_str
}

function HDDD() {
    console.log('HDDD');
    var J_str = Number.parseFloat(document.getElementById('J_str').value);
    var K_str = Number.parseFloat(document.getElementById('K_str').value);
    var L_str = Number.parseFloat(document.getElementById('L_str').value);
    var M_str = Number.parseFloat(document.getElementById('M_str').value);
    var N_str = Number.parseFloat(document.getElementById('N_str').value);
    var resp = HD4(J_str, K_str, L_str, M_str, N_str);
    console.log (resp);
    document.getElementById('HDDD').innerHTML = " " + resp;
    }
function HD4(J_str, K_str, L_str, M_str, N_str) {
    if (J_str && K_str && L_str && M_str && N_str)
        return ' p = ' + J_str + ' , ρ = ' + K_str + ' , g = ' + L_str + ' , h = ' + M_str + ' e P = ' + N_str
    else if (!J_str && K_str && L_str && M_str && N_str)
        return ' p = ' + Math.floor (N_str - (K_str * L_str * M_str)) + ' , ρ = ' + K_str + ' , g = ' + L_str + ' , h = ' + M_str + ' e P = ' + N_str
    else if (!K_str && J_str && L_str && M_str && N_str)
        return ' ρ = ' + Math.floor (N_str - J_str) / (L_str * M_str) + ' , p = ' + J_str + ' , g = ' + L_str + ' , h = ' + M_str + ' e P = ' + N_str
    else if (!L_str && J_str && K_str && M_str && N_str)
        return ' g = ' + Math.floor (N_str - J_str) / (K_str * M_str) + ' , p = ' + J_str + ' , ρ = ' + K_str + ' , h = ' + M_str + ' e P = ' + N_str
    else if (!M_str && J_str && K_str && L_str && N_str)
        return ' h = ' + Math.floor (N_str - J_str) / (K_str * L_str) + ' , p = ' + J_str + ' , ρ = ' + K_str + ' , g = ' + L_str + ' e P = ' + N_str
    else if (!N_str && J_str && K_str && L_str && M_str)
        return ' P = ' + Math.floor (J_str + (K_str * L_str * M_str)) + ' , p = ' + J_str + ' , ρ = ' + K_str + ' , g = ' + L_str + ' e h = ' + M_str
}

function HDDDD() {
    console.log('HDDDD');
    var O_str = Number.parseFloat(document.getElementById('O_str').value);
    var P_str = Number.parseFloat(document.getElementById('P_str').value);
    var Q_str = Number.parseFloat(document.getElementById('Q_str').value);
    var R_str = Number.parseFloat(document.getElementById('R_str').value);
    var resp = HD5(O_str, P_str, Q_str, R_str);
    console.log (resp);
    document.getElementById('HDDDD').innerHTML = " " + resp;
    }
function HD5(O_str, P_str, Q_str, R_str) {
    if (O_str && P_str && Q_str && R_str)
        return ' ρ = ' + O_str + ' , g = ' + P_str + ' , h = ' + Q_str + ' e E = ' + R_str 
    else if (!O_str && P_str && Q_str && R_str)
        return ' ρ = ' + Math.floor (R_str / (P_str * Q_str)) + ' , g = ' + P_str + ' , V = ' + Q_str + ' e E = ' + R_str
    else if (!P_str && O_str && Q_str && R_str)
        return ' g = ' + Math.floor (R_str / (O_str * Q_str)) + ' , ρ = ' + O_str + ' , V = ' + Q_str + ' e E = ' + R_str
    else if (!Q_str && O_str && P_str && R_str)
        return ' V = ' + Math.floor (R_str / (O_str * P_str)) + ' , ρ = ' + O_str + ' , g = ' + P_str + ' e E = ' + R_str
    else if (!R_str && O_str && P_str && Q_str)
        return ' E = ' + Math.floor (O_str * P_str * Q_str) + ' , ρ = ' + O_str + ' , g = ' + P_str + ' e V = ' + Q_str 
}

// Gravitação Universal
function GU() {
    console.log('GU');
    var S_str = Number.parseFloat(document.getElementById('S_str').value);
    var T_str = Number.parseFloat(document.getElementById('T_str').value);
    var U_str = Number.parseFloat(document.getElementById('U_str').value);
    var resp = GU2(S_str, T_str, U_str);
    console.log (resp);
    document.getElementById('GU').innerHTML = " " + resp;
    }
function GU2(S_str, T_str, U_str) {
    if (S_str && T_str && U_str)
        return ' K = ' + S_str + ' , r = ' + T_str + ' e T = ' + U_str
    else if (!S_str && T_str && U_str)
        return ' K = ' + Math.floor (Math.pow(U_str , 2) / Math.pow(T_str , 3)) + ' , r = ' + T_str + ' e T = ' + U_str
    else if (!T_str && S_str && U_str)
        return ' r = ' + Math.floor (Math.cbrt(Math.pow(U_str , 2) / S_str)) + ' , K = ' + S_str + ' e T = ' + U_str
    else if (!U_str && S_str && T_str)
        return ' T = ' + Math.floor (Math.sqrt(S_str * Math.pow(T_str , 3))) + ' , K = ' + S_str + ' r = ' + T_str
}

function GUU() {
    console.log('GUU');
    var V_str = Number.parseFloat(document.getElementById('V_str').value);
    var W_str = Number.parseFloat(document.getElementById('W_str').value);
    var X_str = Number.parseFloat(document.getElementById('X_str').value);
    var Y_str = Number.parseFloat(document.getElementById('Y_str').value);
    var Z_str = Number.parseFloat(document.getElementById('Z_str').value);
    var resp = GU3(V_str, W_str, X_str, Y_str, Z_str);
    console.log (resp);
    document.getElementById('GUU').innerHTML = " " + resp;
    }
function GU3(V_str, W_str, X_str, Y_str, Z_str) {
    if (V_str && W_str && X_str && Y_str && Z_str)
        return ' G = ' + V_str + ' , m1 = ' + W_str + ' , m2 = ' + X_str + ' , d = ' + Y_str + ' e F = ' + Z_str
    else if(!V_str && W_str && X_str && Y_str && Z_str)
        return ' G = ' + Math.floor (Z_str * Math.pow(Y_str , 2) / (W_str * X_str)) + ' , m1 = ' + W_str + ' , m2 = ' + X_str + ' , d = ' + Y_str + ' e F = ' + Z_str
    else if(!W_str && V_str && X_str && Y_str && Z_str)
        return ' m1 = ' + Math.floor (Z_str * Math.pow(Y_str , 2) / (V_str * X_str)) + ' , G = ' + V_str + ' , m2 = ' + X_str + ' , d = ' + Y_str + ' e F = ' + Z_str
    else if(!X_str && V_str && W_str && Y_str && Z_str)
        return ' m2 = ' + Math.floor (Z_str * Math.pow(Y_str , 2) / (V_str * W_str)) + ' , G = ' + V_str + ' , m1 = ' + W_str + ' , d = ' + Y_str + ' e F = ' + Z_str
    else if(!Y_str && V_str && W_str && X_str && Z_str)
        return ' d = ' + Math.floor (Math.sqrt((V_str * W_str * X_str) / Z_str)) + ' , G = ' + V_str + ' , m1 = ' + W_str + ' , m2 = ' + X_str + ' e F = ' + Z_str
    else if(!Z_str && V_str && W_str && X_str && Y_str)
        return ' F = ' + Math.floor (V_str * X_str * Y_str / Math.pow(Y_str , 2)) + ' , G = ' + V_str + ' , m1 = ' + W_str + ' , m2 = ' + Y_str + ' e d = ' + Y_str
}

// Termologia e Termodinâmica
function TT() {
    console.log('TT');
    var AB_str = Number.parseFloat(document.getElementById('AB_str').value);
    var BC_str = Number.parseFloat(document.getElementById('BC_str').value);
    var resp = TT2(AB_str, BC_str);
    console.log (resp);
    document.getElementById('TT').innerHTML = " " + resp;
    }
function TT2(AB_str, BC_str) {
    if (AB_str && BC_str)
        return ' Tf = ' + AB_str + ' , Tc = ' + BC_str
    else if (!AB_str && BC_str)
        return ' Tf = ' + Math.floor (9* (BC_str / 5) + 32) + ' e Tc = ' + BC_str 
    else if (!BC_str && AB_str)
        return ' Tc = ' + Math.floor (((AB_str - 32) / 9) * 5) + ' e Tf = ' + AB_str
}

function TTT() {
    console.log('TTT');
    var CD_str = Number.parseFloat(document.getElementById('CD_str').value);
    var DE_str = Number.parseFloat(document.getElementById('DE_str').value);
    var resp = TT3(CD_str, DE_str);
    console.log (resp);
    document.getElementById('TTT').innerHTML = " " + resp;
    }
function TT3(CD_str, DE_str) {
    if (CD_str && DE_str)
        return ' Tc = ' + AB_str + ' , Tk = ' + BC_str
    else if (!CD_str && DE_str)
        return ' Tc = ' + Math.floor (DE_str - 273) + ' e Tk = ' + DE_str 
    else if (!DE_str && CD_str)
        return ' Tk = ' + Math.floor (CD_str + 273) + ' e Tc = ' + CD_str
}

function TTTT() {
    console.log('TTTT');
    var EF_str = Number.parseFloat(document.getElementById('EF_str').value);
    var FG_str = Number.parseFloat(document.getElementById('FG_str').value);
    var GH_str = Number.parseFloat(document.getElementById('GH_str').value);
    var HI_str = Number.parseFloat(document.getElementById('HI_str').value);
    var resp = TT4(EF_str, FG_str, GH_str, HI_str);
    console.log (resp);
    document.getElementById('TTTT').innerHTML = " " + resp;
    }
function TT4(EF_str, FG_str, GH_str, HI_str) {
    if (EF_str && FG_str && GH_str && HI_str)
        return ' L = ' + EF_str + ' , α = ' + FG_str + ' , ∆T = ' + GH_str + ' e ∆L = ' + HI_str 
    else if (!EF_str && FG_str && GH_str && HI_str)
        return ' L = ' + Math.floor (HI_str / (FG_str * GH_str)) + ' , α = ' + FG_str + ' , ∆T = ' + GH_str + ' e ∆L = ' + HI_str
    else if (!FG_str && EF_str && GH_str && HI_str)
        return ' α = ' + Math.floor (HI_str / (EF_str * GH_str)) + ' , L = ' + EF_str + ' , ∆T = ' + GH_str + ' e ∆L = ' + HI_str
    else if (!GH_str && EF_str && FG_str && HI_str)
        return ' ∆T = ' + Math.floor (HI_str / (EF_str * FG_str)) + ' , L = ' + EF_str + ' , α = ' + FG_str + ' e ∆L = ' + HI_str
    else if (!HI_str && EF_str && FG_str && GH_str)
        return ' ∆L = ' + Math.floor (EF_str * FG_str * GH_str) + ' , L = ' + EF_str + ' , α = ' + FG_str + ' e ∆T = ' + GH_str 
}

function TTTTT() {
    console.log('TTTTT');
    var IJ_str = Number.parseFloat(document.getElementById('IJ_str').value);
    var JK_str = Number.parseFloat(document.getElementById('JK_str').value);
    var KL_str = Number.parseFloat(document.getElementById('KL_str').value);
    var LM_str = Number.parseFloat(document.getElementById('LM_str').value);
    var resp = TT5(IJ_str, JK_str, KL_str, LM_str);
    console.log (resp);
    document.getElementById('TTTTT').innerHTML = " " + resp;
    }
function TT5(IJ_str, JK_str, KL_str, LM_str) {
    if (IJ_str && JK_str && KL_str && LM_str)
        return ' A = ' + IJ_str + ' , β = ' + JK_str + ' , ∆T = ' + KL_str + ' e ∆A = ' + LM_str 
    else if (!IJ_str && JK_str && KL_str && LM_str)
        return ' A = ' + Math.floor (LM_str / (JK_str * KL_str)) + ' , β = ' + JK_str + ' , ∆T = ' + KL_str + ' e ∆A = ' + LM_str
    else if (!JK_str && IJ_str && KL_str && LM_str)
        return ' β = ' + Math.floor (LM_str / (IJ_str * KL_str)) + ' , A = ' + IJ_str + ' , ∆T = ' + KL_str + ' e ∆A = ' + LM_str
    else if (!KL_str && IJ_str && JK_str && LM_str)
        return ' ∆T = ' + Math.floor (LM_str / (IJ_str * JK_str)) + ' , A = ' + IJ_str + ' , β = ' + JK_str + ' e ∆A = ' + LM_str
    else if (!LM_str && IJ_str && JK_str && KL_str)
        return ' ∆A = ' + Math.floor (IJ_str * JK_str * KL_str) + ' , A = ' + IJ_str + ' , β = ' + JK_str + ' e ∆T = ' + KL_str 
}

function TTTTTT() {
    console.log('TTTTTT');
    var MN_str = Number.parseFloat(document.getElementById('MN_str').value);
    var NO_str = Number.parseFloat(document.getElementById('NO_str').value);
    var OP_str = Number.parseFloat(document.getElementById('OP_str').value);
    var PQ_str = Number.parseFloat(document.getElementById('PQ_str').value);
    var resp = TT6(MN_str, NO_str, OP_str, PQ_str);
    console.log (resp);
    document.getElementById('TTTTTT').innerHTML = " " + resp;
    }
function TT6(MN_str, NO_str, OP_str, PQ_str) {
    if (MN_str && NO_str && OP_str && PQ_str)
        return ' V = ' + MN_str + ' , ϒ = ' + NO_str + ' , ∆T = ' + OP_str + ' e ∆V = ' + PQ_str 
    else if (!MN_str && NO_str && OP_str && PQ_str)
        return ' V = ' + Math.floor (PQ_str / (NO_str * OP_str)) + ' , ϒ = ' + NO_str + ' , ∆T = ' + OP_str + ' e ∆V = ' + PQ_str
    else if (!NO_str && MN_str && OP_str && PQ_str)
        return ' ϒ = ' + Math.floor (PQ_str / (MN_str * OP_str)) + ' , V = ' + MN_str + ' , ∆T = ' + OP_str + ' e ∆V = ' + PQ_str
    else if (!OP_str && MN_str && NO_str && PQ_str)
        return ' ∆T = ' + Math.floor (PQ_str / (MN_str * NO_str)) + ' , V = ' + MN_str + ' , ϒ = ' + NO_str + ' e ∆V = ' + PQ_str
    else if (!PQ_str && MN_str && NO_str && OP_str)
        return ' ∆V = ' + Math.floor (MN_str * NO_str * OP_str) + ' , V = ' + MN_str + ' , ϒ = ' + NO_str + ' e ∆T = ' + OP_str 
}

function TTTTTTT() {
    console.log('TTTTTTT');
    var QR_str = Number.parseFloat(document.getElementById('QR_str').value);
    var RS_str = Number.parseFloat(document.getElementById('RS_str').value);
    var ST_str = Number.parseFloat(document.getElementById('ST_str').value);
    var resp = TT7(QR_str, RS_str, ST_str);
    console.log (resp);
    document.getElementById('TTTTTTT').innerHTML = " " + resp;
    }
function TT7(QR_str, RS_str, ST_str) {
    if (QR_str && RS_str && ST_str)
        return ' m = ' + QR_str + ' , c = ' + RS_str + ' e C = ' + ST_str
    else if (!QR_str && RS_str && ST_str)
        return ' m = ' + Math.floor (ST_str / RS_str) + ' , c = ' + RS_str + ' e C = ' + ST_str
    else if (!RS_str && QR_str && ST_str)
        return ' c = ' + Math.floor (ST_str / QR_str) + ' , m = ' + QR_str + ' e C = ' + ST_str
    else if (!ST_str && QR_str && RS_str)
        return ' C = ' + Math.floor (QR_str * RS_str) + ' , m = ' + QR_str + ' e c = ' + RS_str
}

function TTTTTTTT() {
    console.log('TTTTTTTT');
    var TU_str = Number.parseFloat(document.getElementById('TU_str').value);
    var UV_str = Number.parseFloat(document.getElementById('UV_str').value);
    var VW_str = Number.parseFloat(document.getElementById('VW_str').value);
    var WX_str = Number.parseFloat(document.getElementById('WX_str').value);
    var resp = TT8(TU_str, UV_str, VW_str, WX_str);
    console.log (resp);
    document.getElementById('TTTTTTTT').innerHTML = " " + resp;
    }
function TT8(TU_str, UV_str, VW_str, WX_str) {
    if (TU_str && UV_str && VW_str && WX_str)
        return ' m = ' + TU_str + ' , c = ' + UV_str + ' , ∆T = ' + VW_str + ' e Q = ' + WX_str 
    else if (!TU_str && UV_str && VW_str && WX_str)
        return ' m = ' + Math.floor (WX_str / (UV_str * VW_str)) + ' , c = ' + UV_str + ' , ∆T = ' + VW_str + ' e Q = ' + WX_str
    else if (!UV_str && TU_str && VW_str && WX_str)
        return ' c = ' + Math.floor (WX_str / (TU_str * VW_str)) + ' , m = ' + TU_str + ' , ∆T = ' + VW_str + ' e Q = ' + WX_str
    else if (!VW_str && TU_str && UV_str && WX_str)
        return ' ∆T = ' + Math.floor (WX_str / (TU_str * UV_str)) + ' , m = ' + TU_str + ' , c = ' + UV_str + ' e Q = ' + WX_str
    else if (!WX_str && TU_str && UV_str && VW_str)
        return ' Q = ' + Math.floor (TU_str * UV_str * VW_str) + ' , m = ' + TU_str + ' , c = ' + UV_str + ' e ∆T = ' + VW_str 
}

function TTTTTTTTT() {
    console.log('TTTTTTTTT');
    var XY_str = Number.parseFloat(document.getElementById('XY_str').value);
    var YZ_str = Number.parseFloat(document.getElementById('YZ_str').value);
    var ZA_str = Number.parseFloat(document.getElementById('ZA_str').value);
    var resp = TT9(XY_str, YZ_str, ZA_str);
    console.log (resp);
    document.getElementById('TTTTTTTTT').innerHTML = " " + resp;
    }
function TT9(XY_str, YZ_str, ZA_str) {
    if (XY_str && YZ_str && ZA_str)
        return ' m = ' + XY_str + ' , L = ' + YZ_str + ' e Q = ' + ZA_str
    else if (!XY_str && YZ_str && ZA_str)
        return ' m = ' + Math.floor (ZA_str / YZ_str) + ' , L = ' + YZ_str + ' e Q = ' + ZA_str
    else if (!YZ_str && XY_str && ZA_str)
        return ' L = ' + Math.floor (ZA_str / XY_str) + ' , m = ' + XY_str + ' e Q = ' + ZA_str
    else if (!ZA_str && XY_str && YZ_str)
        return ' Q = ' + Math.floor (XY_str * YZ_str) + ' , m = ' + XY_str + ' e L = ' + YZ_str
}

function TTTTTTTTTT() {
    console.log('TTTTTTTTTT');
    var AA_str = Number.parseFloat(document.getElementById('AA_str').value);
    var BB_str = Number.parseFloat(document.getElementById('BB_str').value);
    var CC_str = Number.parseFloat(document.getElementById('CC_str').value);
    var resp = TT10(AA_str, BB_str, CC_str);
    console.log (resp);
    document.getElementById('TTTTTTTTTT').innerHTML = " " + resp;
    }
function TT10(AA_str, BB_str, CC_str) {
    if (AA_str && BB_str && CC_str)
        return ' Q = ' + AA_str + ' , T = ' + BB_str + ' e ∆U = ' + CC_str
    else if (!AA_str && BB_str && CC_str)
        return ' Q = ' + Math.floor (CC_str + BB_str) + ' , T = ' + BB_str + ' e ∆U = ' + CC_str
    else if (!BB_str && AA_str && CC_str)
        return ' T = ' + Math.floor (AA_str - CC_str) + ' , Q = ' + AA_str + ' e ∆U = ' + CC_str
    else if (!CC_str && AA_str && BB_str)
        return ' ∆U = ' + Math.floor (AA_str - BB_str) + ' , Q = ' + AA_str + ' e T = ' + BB_str
}

function TTTTTTTTTTT() {
    console.log('TTTTTTTTTTT');
    var DD_str = Number.parseFloat(document.getElementById('DD_str').value);
    var EE_str = Number.parseFloat(document.getElementById('EE_str').value);
    var FF_str = Number.parseFloat(document.getElementById('FF_str').value);
    var resp = TT11(DD_str, EE_str, FF_str);
    console.log (resp);
    document.getElementById('TTTTTTTTTTT').innerHTML = " " + resp;
    }
function TT11(DD_str, EE_str, FF_str) {
    if (DD_str && EE_str && FF_str)
        return ' Qq = ' + DD_str + ' , Qf = ' + EE_str + ' e T = ' + FF_str
    else if (!DD_str && EE_str && FF_str)
        return ' Qq = ' + Math.floor (FF_str + EE_str) + ' , Qf = ' + EE_str + ' e T = ' + FF_str
    else if (!EE_str && DD_str && FF_str)
        return ' Qf = ' + Math.floor (DD_str - FF_str) + ' , Qq = ' + DD_str + ' e T = ' + FF_str
    else if (!FF_str && DD_str && EE_str)
        return ' T = ' + Math.floor (DD_str - EE_str) + ' , Qq = ' + DD_str + ' e Qf = ' + EE_str
}

function TTTTTTTTTTTT() {
    console.log('TTTTTTTTTTTT');
    var GG_str = Number.parseFloat(document.getElementById('GG_str').value);
    var HH_str = Number.parseFloat(document.getElementById('HH_str').value);
    var II_str = Number.parseFloat(document.getElementById('II_str').value);
    var resp = TT12(GG_str, HH_str, II_str);
    console.log (resp);
    document.getElementById('TTTTTTTTTTTT').innerHTML = " " + resp;
    }
function TT12(GG_str, HH_str, II_str) {
    if (GG_str && HH_str && II_str)
        return ' T = ' + GG_str + ' , Qq = ' + HH_str + ' e R = ' + II_str
    else if (!GG_str && HH_str && II_str)
        return ' T = ' + Math.floor (II_str * HH_str) + ' , Qq = ' + HH_str + ' e R = ' + II_str
    else if (!HH_str && GG_str && II_str)
        return ' Qq = ' + Math.floor (GG_str / II_str) + ' , T = ' + GG_str + ' e R = ' + II_str
    else if (!II_str && GG_str && HH_str)
        return ' R = ' + Math.floor (GG_str / HH_str) + ' , T = ' + GG_str + ' e Qq = ' + HH_str
}

function TTTTTTTTTTTTT() {
    console.log('TTTTTTTTTTTTT');
    var JJ_str = Number.parseFloat(document.getElementById('JJ_str').value);
    var KK_str = Number.parseFloat(document.getElementById('KK_str').value);
    var LL_str = Number.parseFloat(document.getElementById('LL_str').value);
    var resp = TT13(JJ_str, KK_str, LL_str);
    console.log (resp);
    document.getElementById('TTTTTTTTTTTTT').innerHTML = " " + resp;
    }
function TT13(JJ_str, KK_str, LL_str) { 
    if (JJ_str && KK_str && LL_str)
        return ' ∆Q = ' + JJ_str + ' , T = ' + KK_str + ' e ∆S = ' + LL_str
    else if (!JJ_str && KK_str && LL_str)
        return ' ∆Q = ' + Math.floor (LL_str * KK_str) + ' , T = ' + KK_str + ' e ∆S = ' + LL_str
    else if (!KK_str && JJ_str && LL_str)
        return ' T = ' + Math.floor (JJ_str / LL_str) + ' , ∆Q = ' + JJ_str + ' e ∆S = ' + LL_str
    else if (!LL_str && JJ_str && KK_str)
        return ' ∆S = ' + Math.floor (JJ_str / KK_str) + ' , ∆Q = ' + JJ_str + ' e T = ' + KK_str
}
//Terminando
function EX11() {
    console.log('EX11');
    var exa_str = Number.parseFloat(document.getElementById('exa_str').value);
    var exb_str = Number.parseFloat(document.getElementById('exb_str').value);
    var exc_str = Number.parseFloat(document.getElementById('exc_str').value);
    var resp = EX2(exa_str, exb_str, exc_str);
    console.log (resp);
    document.getElementById('EX11').innerHTML = " " + resp;
    }
function EX2(exa_str, exb_str, exc_str) { 
    if (exa_str && exb_str && exc_str)
        return ' v = ' + exa_str + ' , V = ' + exb_str + ' e θ = ' + exc_str
    else if (!exa_str && exb_str && exc_str)
        return ' v = ' + Math.round(exb_str / Math.cos(exc_str * Math.PI / 180)) + ' , V = ' + exb_str + ' e θ = ' + exc_str
    else if (!exb_str && exa_str && exc_str)
        return ' V = ' + Math.round(exa_str * Math.cos(exc_str * Math.PI / 180)) + ' , v = ' + exa_str + ' e θ = ' + exc_str
}

function EX22() {
    console.log('EX22');
    var exd_str = Number.parseFloat(document.getElementById('exd_str').value);
    var exe_str = Number.parseFloat(document.getElementById('exe_str').value);
    var exf_str = Number.parseFloat(document.getElementById('exf_str').value);
    var resp = EX3(exd_str, exe_str, exf_str);
    console.log (resp);
    document.getElementById('EX22').innerHTML = " " + resp;
    }
function EX3(exd_str, exe_str, exf_str) { 
    if (exd_str && exe_str && exf_str)
        return ' v = ' + exd_str + ' , V = ' + exe_str + ' e θ = ' + exf_str
    else if (!exd_str && exe_str && exf_str)
        return ' v = ' + Math.round(exe_str / Math.sin(exf_str * Math.PI / 180)) + ' , V = ' + exe_str + ' e θ = ' + exf_str
    else if (!exe_str && exd_str && exf_str)
        return ' V = ' + Math.round(exd_str * Math.sin(exf_str * Math.PI / 180)) + ' , v = ' + exd_str + ' e θ = ' + exf_str
}

function EX33() {
    console.log('EX33');
    var exg_str = Number.parseFloat(document.getElementById('exg_str').value);
    var exh_str = Number.parseFloat(document.getElementById('exh_str').value);
    var exi_str = Number.parseFloat(document.getElementById('exi_str').value);
    var exj_str = Number.parseFloat(document.getElementById('exj_str').value);
    var resp = EX4(exg_str, exh_str, exi_str, exj_str);
    console.log (resp);
    document.getElementById('EX33').innerHTML = " " + resp;
    }
function EX4(exg_str, exh_str, exi_str, exj_str) { 
    if (exg_str && exh_str && exi_str && exj_str)
        return ' v = ' + exg_str + ' , a = ' + exh_str + ' , t = ' + exi_str + ' e V = ' + exj_str
    else if (!exg_str && exh_str && exi_str && exj_str)
        return ' v = ' + Math.floor(exj_str - (exh_str * exi_str)) + ' , a = ' + exh_str + ' , t = ' + exi_str + ' e V = ' + exj_str
    else if (!exh_str && exg_str && exi_str && exj_str)
        return ' a = ' + Math.floor((exj_str - exg_str) / exi_str) + ' , v = ' + exg_str + ' , t = ' + exi_str + ' e V = ' + exj_str
    else if (!exi_str && exg_str && exh_str && exj_str)
        return ' t = ' + Math.floor((exj_str - exg_str) / exh_str) + ' , v = ' + exg_str + ' , a = ' + exh_str + ' e V = ' + exj_str
    else if (!exj_str && exg_str && exh_str && exi_str)
        return ' V = ' + Math.floor(exg_str + (exh_str * exi_str)) + ' , v = ' + exg_str + ' , a = ' + exh_str + ' e t = ' + exi_str
}

// Ondas e Ótica
function OD() {
    console.log('ODD');
    var MM_str = Number.parseFloat(document.getElementById('MM_str').value);
    var NN_str = Number.parseFloat(document.getElementById('NN_str').value);
    var OO_str = Number.parseFloat(document.getElementById('OO_str').value);
    var resp = OD3(MM_str, NN_str, OO_str);
    console.log (resp);
    document.getElementById('OD').innerHTML = " " + resp;
    }
function OD3(MM_str, NN_str, OO_str) {
    if (MM_str && NN_str && OO_str)
        return ' ƛ = ' + MM_str + ' , f = ' + NN_str + ' e v = ' + OO_str
    else if (!MM_str && NN_str && OO_str)
        return ' ƛ = ' + Math.floor (OO_str / NN_str) + ' , f = ' + NN_str + ' e v = ' + OO_str
    else if (!NN_str && MM_str && OO_str)
        return ' f = ' + Math.floor (OO_str / MM_str) + ' , ƛ = ' + MM_str + ' e v = ' + OO_str
    else if (!OO_str && MM_str && NN_str)
        return ' v = ' + Math.floor (MM_str * NN_str) + ' , ƛ = ' + MM_str + ' e f = ' + NN_str
}

// Eletroestática
function EL() {
    console.log('EL');
    var PP_str = Number.parseFloat(document.getElementById('PP_str').value);
    var QQ_str = Number.parseFloat(document.getElementById('QQ_str').value);
    var RR_str = Number.parseFloat(document.getElementById('RR_str').value);
    var SS_str = Number.parseFloat(document.getElementById('SS_str').value);
    var TT_str = Number.parseFloat(document.getElementById('TT_str').value);
    var resp = EL2(PP_str, QQ_str, RR_str, SS_str, TT_str);
    console.log (resp);
    document.getElementById('EL').innerHTML = " " + resp;
    }
function EL2(PP_str, QQ_str, RR_str, SS_str, TT_str) {
    if (PP_str && QQ_str && RR_str && SS_str && TT_str)
        return ' k = ' + PP_str + ' , Q1 = ' + QQ_str + ' , Q2 = ' + RR_str + ' , d = ' + SS_str + ' e F = ' + TT_str
    else if (!PP_str && QQ_str && RR_str && SS_str && TT_str)
        return ' k = ' + Math.floor ((TT_str * Math.pow(SS_str , 2)) / (QQ_str * RR_str)) + ' , Q1 = ' + QQ_str + ' e Q2 = ' + RR_str + ' , d = ' + SS_str + ' e F = ' + TT_str
    else if (!QQ_str && PP_str && RR_str && SS_str && TT_str)
        return ' Q1 = ' + Math.floor ((TT_str * Math.pow(SS_str , 2)) / (PP_str * RR_str)) + ' , k = ' + PP_str + ' e Q2 = ' + RR_str + ' , d = ' + SS_str + ' e F = ' + TT_str
    else if (!RR_str && PP_str && QQ_str && SS_str && TT_str)
        return ' Q2 = ' + Math.floor ((TT_str * Math.pow(SS_str , 2)) / (QQ_str * PP_str)) + ' , k = ' + PP_str + ' e Q1 = ' + QQ_str + ' , d = '  + SS_str + ' e F = ' + TT_str
    else if (!SS_str && PP_str && QQ_str && RR_str && TT_str)
        return ' d = ' + Math.floor (Math.sqrt((PP_str * QQ_str * RR_str) / TT_str)) + ' , k = ' + PP_str + ' e Q1 = ' + QQ_str + ' , Q2 = '  + RR_str + ' e F = ' + TT_str
    else if (!TT_str && PP_str && QQ_str && RR_str && SS_str)
        return ' F = ' + Math.floor ((PP_str * QQ_str * RR_str) / Math.pow(SS_str , 2)) + ' , k = ' + PP_str + ' e Q1 = ' + QQ_str + ' , Q2 = '  + RR_str + ' e d = ' + SS_str
}

function ELL() {
    console.log('ELL');
    var UU_str = Number.parseFloat(document.getElementById('UU_str').value);
    var VV_str = Number.parseFloat(document.getElementById('VV_str').value);
    var WW_str = Number.parseFloat(document.getElementById('WW_str').value);
    var resp = ELL2(UU_str, VV_str, WW_str);
    console.log (resp);
    document.getElementById('ELL').innerHTML = " " + resp;
    }
function ELL2(UU_str, VV_str, WW_str) {
    if (UU_str && VV_str && WW_str)
        return ' q = ' + UU_str + ' , E = ' + VV_str + ' e F = ' + WW_str
    else if (!UU_str && VV_str && WW_str)
        return ' q = ' + Math.floor (WW_str / VV_str) + ' , E = ' + VV_str + ' e F = ' + WW_str
    else if (!VV_str && UU_str && WW_str)
        return ' E = ' + Math.floor (WW_str / UU_str) + ' , q = ' + UU_str + ' e F = ' + WW_str
    else if (!WW_str && UU_str && VV_str)
        return ' F = ' + Math.floor (UU_str * VV_str) + ' , q = ' + UU_str + ' e E = ' + VV_str
}

function ELLL() {
    console.log('ELL');
    var XX_str = Number.parseFloat(document.getElementById('XX_str').value);
    var YY_str = Number.parseFloat(document.getElementById('YY_str').value);
    var ZZ_str = Number.parseFloat(document.getElementById('ZZ_str').value);
    var ABC_str = Number.parseFloat(document.getElementById('ABC_str').value);
    var resp = ELLL2(XX_str, YY_str, ZZ_str, ABC_str);
    console.log (resp);
    document.getElementById('ELLL').innerHTML = " " + resp;
    }
function ELLL2(XX_str, YY_str, ZZ_str, ABC_str) {
    if (XX_str && YY_str && ZZ_str && ABC_str)
        return ' k = ' + XX_str + ' , Q = ' + YY_str + ' e d = ' + ZZ_str + ' e V = ' + ABC_str
    else if (!XX_str && YY_str && ZZ_str && ABC_str)
        return ' k = ' + Math.floor ((ABC_str * ZZ_str) / YY_str) + ' , Q = ' + YY_str + ' , d = ' + ZZ_str + ' e V = ' + ABC_str
    else if (!YY_str && XX_str && ZZ_str && ABC_str)
        return ' Q = ' + Math.floor ((ABC_str * ZZ_str) / XX_str) + ' , k = ' + XX_str + ' , d = ' + ZZ_str + ' e V = ' + ABC_str
    else if (!ZZ_str && XX_str && YY_str && ABC_str)
        return ' d = ' + Math.floor ((XX_str * YY_str) / ABC_str) + ' , k = ' + XX_str + ' , Q = ' + YY_str + ' e V = ' + ABC_str
    else if (!ABC_str && XX_str && YY_str && ZZ_str)
        return ' V = ' + Math.floor ((XX_str * YY_str) / ZZ_str) + ' , k = ' + XX_str + ' , Q = ' + YY_str + ' e E = ' + ZZ_str
}

function ELLLL() {
    console.log('ELLLL');
    var BCD_str = Number.parseFloat(document.getElementById('BCD_str').value);
    var CDE_str = Number.parseFloat(document.getElementById('CDE_str').value);
    var DEF_str = Number.parseFloat(document.getElementById('DEF_str').value);
    var resp = ELLLL2(BCD_str, CDE_str, DEF_str);
    console.log (resp);
    document.getElementById('ELLLL').innerHTML = " " + resp;
    }
function ELLLL2(BCD_str, CDE_str, DEF_str) {
    if (BCD_str && CDE_str && DEF_str)
        return ' R = ' + BCD_str + ' , i = ' + CDE_str + ' e U = ' + DEF_str
    else if (!BCD_str && CDE_str && DEF_str)
        return ' R = ' + Math.floor (DEF_str / CDE_str) + ' , i = ' + CDE_str + ' e U = ' + DEF_str
    else if (!CDE_str && BCD_str && DEF_str)
        return ' i = ' + Math.floor (DEF_str / BCD_str) + ' , R = ' + BCD_str + ' e U = ' + DEF_str
    else if (!DEF_str && BCD_str && CDE_str)
        return ' U = ' + Math.floor (BCD_str * CDE_str) + ' , R = ' + BCD_str + ' e i = ' + CDE_str
}

function ELLLLL() {
    console.log('ELLLLL');
    var EFG_str = Number.parseFloat(document.getElementById('EFG_str').value);
    var FGH_str = Number.parseFloat(document.getElementById('FGH_str').value);
    var GHI_str = Number.parseFloat(document.getElementById('GHI_str').value);
    var resp = ELLLLL2(EFG_str, FGH_str, GHI_str);
    console.log (resp);
    document.getElementById('ELLLLL').innerHTML = " " + resp;
    }
function ELLLLL2(EFG_str, FGH_str, GHI_str) {
    if (EFG_str && FGH_str && GHI_str)
        return ' U = ' + EFG_str + ' , i = ' + FGH_str + ' e P = ' + GHI_str
    else if (!EFG_str && FGH_str && GHI_str)
        return ' U = ' + Math.floor (GHI_str / FGH_str) + ' , i = ' + FGH_str + ' e P = ' + GHI_str
    else if (!FGH_str && EFG_str && GHI_str)
        return ' i = ' + Math.floor (GHI_str / EFG_str) + ' , U = ' + EFG_str + ' e P = ' + GHI_str
    else if (!GHI_str && EFG_str && FGH_str)
        return ' P = ' + Math.floor (EFG_str * FGH_str) + ' , U = ' + EFG_str + ' e i = ' + FGH_str
}

function ELLLLLL() {
    console.log('ELLLLLL');
    var HIJ_str = Number.parseFloat(document.getElementById('HIJ_str').value);
    var IJK_str = Number.parseFloat(document.getElementById('IJK_str').value);
    var JKL_str = Number.parseFloat(document.getElementById('JKL_str').value);
    var resp = ELLLLLL2(HIJ_str, IJK_str, JKL_str);
    console.log (resp);
    document.getElementById('ELLLLLL').innerHTML = " " + resp;
    }
function ELLLLLL2(HIJ_str, IJK_str, JKL_str) {
    if (HIJ_str && IJK_str && JKL_str)
        return ' R = ' + HIJ_str + ' , i = ' + IJK_str + ' e P = ' + JKL_str
    else if (!HIJ_str && IJK_str && JKL_str)
        return ' R = ' + Math.floor (JKL_str / Math.pow(IJK_str , 2)) + ' , i = ' + IJK_str + ' e P = ' + JKL_str
    else if (!IJK_str && HIJ_str && JKL_str)
        return ' i = ' + Math.floor (Math.sqrt(JKL_str / HIJ_str)) + ' , R = ' + HIJ_str + ' e P = ' + JKL_str
    else if (!JKL_str && HIJ_str && IJK_str)
        return ' P = ' + Math.floor (HIJ_str * Math.pow(IJK_str , 2)) + ' , R = ' + HIJ_str + ' e i = ' + IJK_str
}

function ELLLLLLI() {
    console.log('ELLLLLLI');
    var ABB_str = Number.parseFloat(document.getElementById('ABB_str').value);
    var BBA_str = Number.parseFloat(document.getElementById('BBA_str').value);
    var BAB_str = Number.parseFloat(document.getElementById('BAB_str').value);
    var resp = ELLLLLLI2(ABB_str, BBA_str, BAB_str);
    console.log (resp);
    document.getElementById('ELLLLLLI').innerHTML = " " + resp;
    }
function ELLLLLLI2(ABB_str, BBA_str, BAB_str) {
    if (ABB_str && BBA_str && BAB_str)
        return ' ∆t = ' + ABB_str + ' , P = ' + BBA_str + ' e E = ' + BAB_str
    else if (!ABB_str && BBA_str && BAB_str)
        return ' ∆t = ' + Math.floor (BAB_str / BBA_str) + ' , P = ' + BBA_str + ' e E = ' + BAB_str
    else if (!BBA_str && ABB_str && BAB_str)
        return ' P = ' + Math.floor (BAB_str / ABB_str) + ' , ∆t = ' + ABB_str + ' e E = ' + BAB_str
    else if (!BAB_str && ABB_str && BBA_str)
        return ' E = ' + Math.floor (ABB_str * BBA_str) + ' , ∆t = ' + ABB_str + ' e P = ' + BBA_str
}

function ELLLLLLL() {
    console.log('ELLLLLLL');
    var KLM_str = Number.parseFloat(document.getElementById('KLM_str').value);
    var LMN_str = Number.parseFloat(document.getElementById('LMN_str').value);
    var MNO_str = Number.parseFloat(document.getElementById('MNO_str').value);
    var resp = ELLLLLLL2(KLM_str, LMN_str, MNO_str);
    console.log (resp);
    document.getElementById('ELLLLLLL').innerHTML = " " + resp;
    }
function ELLLLLLL2(KLM_str, LMN_str, MNO_str) {
    if (KLM_str && LMN_str && MNO_str)
        return ' Q = ' + KLM_str + ' , U = ' + LMN_str + ' e C = ' + MNO_str
    else if (!KLM_str && LMN_str && MNO_str)
        return ' Q = ' + Math.floor (MNO_str * LMN_str) + ' , U = ' + LMN_str + ' e C = ' + MNO_str
    else if (!LMN_str && KLM_str && MNO_str)
        return ' U = ' + Math.floor (KLM_str / MNO_str) + ' , Q = ' + KLM_str + ' e C = ' + MNO_str
    else if (!MNO_str && KLM_str && LMN_str)
        return ' C = ' + Math.floor (KLM_str / LMN_str) + ' , Q = ' + KLM_str + ' e U = ' + LMN_str
}

// Eletromagnetismo
function ELLLLLLLL() {
    console.log('ELLLLLLLL');
    var NOP_str = Number.parseFloat(document.getElementById('NOP_str').value);
    var OPQ_str = Number.parseFloat(document.getElementById('OPQ_str').value);
    var PQR_str = Number.parseFloat(document.getElementById('PQR_str').value);
    var QRS_str = Number.parseFloat(document.getElementById('QRS_str').value);
    var RST_str = Number.parseFloat(document.getElementById('RST_str').value);
    var resp = ELLLLLLLL2(NOP_str, OPQ_str, PQR_str, QRS_str, RST_str);
    console.log (resp);
    document.getElementById('ELLLLLLLL').innerHTML = " " + resp;
    }
function ELLLLLLLL2(NOP_str, OPQ_str, PQR_str, QRS_str, RST_str) {
    if (NOP_str && OPQ_str && PQR_str && QRS_str && RST_str)
        return ' B = ' + NOP_str + ' , q = ' + OPQ_str + ' , v = ' + PQR_str + ' , θ = ' + QRS_str + ' e F = ' + RST_str
    else if (!NOP_str && OPQ_str && PQR_str && QRS_str && RST_str)
        return ' B = ' + Math.round (RST_str / (OPQ_str * PQR_str * Math.sin(QRS_str * Math.PI / 180))) + ' , q = ' + OPQ_str + ' , v = ' + PQR_str + ' , θ = ' + QRS_str + ' e F = ' + RST_str
    else if (!OPQ_str && NOP_str && PQR_str && QRS_str && RST_str)
        return ' q = ' + Math.round (RST_str / (NOP_str * PQR_str * Math.sin(QRS_str * Math.PI / 180))) + ' , B = ' + NOP_str + ' , v = ' + PQR_str + ' , θ = ' + QRS_str + ' e F = ' + RST_str
    else if (!PQR_str && NOP_str && OPQ_str && QRS_str && RST_str)
        return ' v = ' + Math.round (RST_str / (OPQ_str * NOP_str * Math.sin(QRS_str * Math.PI / 180))) + ' , B = ' + NOP_str + ' , q = ' + OPQ_str + ' , θ = ' + QRS_str + ' e F = ' + RST_str
    else if (!RST_str && NOP_str && OPQ_str && PQR_str && QRS_str)
        return ' F = ' + Math.round (NOP_str * OPQ_str * PQR_str * Math.sin(QRS_str * Math.PI / 180)) + ' , B = ' + NOP_str + ' , q = ' + OPQ_str + ' , v = ' + PQR_str + ' e θ = ' + QRS_str
}

function ELLLLLLLLL() {
    console.log('ELLLLLLLLL');
    var STU_str = Number.parseFloat(document.getElementById('STU_str').value);
    var TUV_str = Number.parseFloat(document.getElementById('TUV_str').value);
    var UVW_str = Number.parseFloat(document.getElementById('UVW_str').value);
    var VWX_str = Number.parseFloat(document.getElementById('VWX_str').value);
    var WXY_str = Number.parseFloat(document.getElementById('WXY_str').value);
    var resp = ELLLLLLLLL2(STU_str, TUV_str, UVW_str, VWX_str, WXY_str);
    console.log (resp);
    document.getElementById('ELLLLLLLLL').innerHTML = " " + resp;
    }
function ELLLLLLLLL2(STU_str, TUV_str, UVW_str, VWX_str, WXY_str) {
    if (STU_str && TUV_str && UVW_str && VWX_str && WXY_str)
        return ' B = ' + STU_str + ' , i = ' + TUV_str + ' , l = ' + UVW_str + ' , θ = ' + VWX_str + ' e F = ' + WXY_str
    else if (!STU_str && TUV_str && UVW_str && VWX_str && WXY_str)
        return ' B = ' + Math.round (WXY_str / (TUV_str * UVW_str * Math.sin(VWX_str * Math.PI / 180))) + ' , i = ' + TUV_str + ' , l = ' + UVW_str + ' , θ = ' + VWX_str + ' e F = ' + WXY_str
    else if (!TUV_str && STU_str && UVW_str && VWX_str && WXY_str)
        return ' i = ' + Math.round (WXY_str / (STU_str * UVW_str * Math.sin(VWX_str * Math.PI / 180))) + ' , B = ' + STU_str + ' , l = ' + UVW_str + ' , θ = ' + VWX_str + ' e F = ' + WXY_str
    else if (!UVW_str && STU_str && TUV_str && VWX_str && WXY_str)
        return ' l = ' + Math.round (WXY_str / (TUV_str * STU_str * Math.sin(VWX_str * Math.PI / 180))) + ' , B = ' + STU_str + ' , i = ' + TUV_str + ' , θ = ' + VWX_str + ' e F = ' + WXY_str
    else if (!WXY_str && STU_str && TUV_str && UVW_str && VWX_str)
        return ' F = ' + Math.round (STU_str * TUV_str * UVW_str * Math.sin(VWX_str * Math.PI / 180)) + ' , B = ' + STU_str + ' , i = ' + TUV_str + ' , l = ' + UVW_str + ' e θ = ' + VWX_str
}

function ELLLLLLLLLL() {
    console.log('ELLLLLLLLLL');
    var XYZ_str = Number.parseFloat(document.getElementById('XYZ_str').value);
    var AAA_str = Number.parseFloat(document.getElementById('AAA_str').value);
    var BBB_str = Number.parseFloat(document.getElementById('BBB_str').value);
    var CCC_str = Number.parseFloat(document.getElementById('CCC_str').value);
    var resp = ELLLLLLLLLL2(XYZ_str, AAA_str, BBB_str, CCC_str);
    console.log (resp);
    document.getElementById('ELLLLLLLLLL').innerHTML = " " + resp;
    }
function ELLLLLLLLLL2(XYZ_str, AAA_str, BBB_str, CCC_str) {
    if (XYZ_str && AAA_str && BBB_str && CCC_str)
        return ' B = ' + XYZ_str + ' , A = ' + AAA_str + ' , θ = ' + BBB_str + ' e φ = ' + CCC_str
    else if (!XYZ_str && AAA_str && BBB_str && CCC_str)
        return ' B = ' + Math.round (CCC_str / (AAA_str * Math.cos(BBB_str * Math.PI / 180))) + ' , A = ' + AAA_str + ' , θ = ' + BBB_str + ' e φ = ' + CCC_str
    else if (!AAA_str && XYZ_str && BBB_str && CCC_str)
        return ' A = ' + Math.round (CCC_str / (XYZ_str * Math.cos(BBB_str * Math.PI / 180))) + ' , B = ' + XYZ_str + ' , θ = ' + BBB_str + ' e φ = ' + CCC_str
    else if (!CCC_str && XYZ_str && AAA_str && BBB_str)
        return ' φ = ' + Math.round (XYZ_str * (AAA_str * Math.cos(BBB_str * Math.PI / 180))) + ' , B = ' + XYZ_str + ' , A = ' + AAA_str + ' e θ = ' + BBB_str
}

function ELLLLLLLLLLL() {
    console.log('ELLLLLLLLLLL');
    var DDD_str = Number.parseFloat(document.getElementById('DDD_str').value);
    var EEE_str = Number.parseFloat(document.getElementById('EEE_str').value);
    var FFF_str = Number.parseFloat(document.getElementById('FFF_str').value);
    var resp = ELLLLLLLLLLL2(DDD_str, EEE_str, FFF_str);
    console.log (resp);
    document.getElementById('ELLLLLLLLLLL').innerHTML = " " + resp;
    }
function ELLLLLLLLLLL2(DDD_str, EEE_str, FFF_str) { 
    if (DDD_str && EEE_str && FFF_str)
        return ' ∆φ = ' + DDD_str + ' , ∆t = ' + EEE_str + ' e ε = ' + FFF_str
    else if (!DDD_str && EEE_str && FFF_str)
        return ' ∆φ = ' + Math.floor (FFF_str * EEE_str) + ' , ∆t = ' + EEE_str + ' e ε = ' + FFF_str
    else if (!EEE_str && DDD_str && FFF_str)
        return ' ∆t = ' + Math.floor (DDD_str / FFF_str) + ' , ∆φ = ' + DDD_str + ' e ε = ' + FFF_str
    else if (!FFF_str && DDD_str && EEE_str)
        return ' ε = ' + Math.floor (DDD_str / EEE_str) + ' , ∆φ = ' + DDD_str + ' e ∆t = ' + EEE_str
}

