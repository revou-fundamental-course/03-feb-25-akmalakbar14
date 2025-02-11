document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.getElementById('main-input');
    const resultInput = document.getElementById('main-result');
    const caraKonversiInput = document.getElementById('cara-konversi');
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');

    
    // Fungsi untuk menangani konversi Celcius ke Fahrenheit
    convertButton.addEventListener('click', function() {
        const celcius = parseFloat(celciusInput.value);
        if (!isNaN(celcius)) {
            const fahrenheit = (celcius * 9/5) + 32;
            resultInput.value = fahrenheit.toFixed(2);
            caraKonversiInput.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
        } else {
            alert('Masukkan suhu yang valid dalam Celcius >_<');
        }
    });
    
    let resetClickCount = 0;
    let resetTimer;
    
    // Fungsi untuk mereset input
    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        resultInput.value = '';
        caraKonversiInput.value = '';

        resetClickCount++;

        // Jika tombol reset ditekan 5 kali dalam 1 detik
        if (resetClickCount === 5) {
            alert('Udah bang 🗿');
            resetClickCount = 0; 
            clearTimeout(resetTimer); 
        }

        // Set timer untuk mereset counter setelah 1 detik
        if (resetClickCount === 1) {
            resetTimer = setTimeout(function() {
                resetClickCount = 0; //
            }, 1000); 
        }
    });

    // Fungsi untuk membalik konversi (Fahrenheit ke Celcius)
    reverseButton.addEventListener('click', function() {
        const fahrenheit = parseFloat(resultInput.value);
        if (!isNaN(fahrenheit)) {
            const celcius = (fahrenheit - 32) * 5/9;
            celciusInput.value = celcius.toFixed(2);
            caraKonversiInput.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
        } else {
            alert('Tidak ada hasil konversi yang valid untuk dibalik T_T');
        }
    });
});
