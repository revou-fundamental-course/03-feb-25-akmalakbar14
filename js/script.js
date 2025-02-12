document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.getElementById('main-input');
    const resultInput = document.getElementById('main-result');
    const caraKonversiInput = document.getElementById('cara-konversi');
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');
    const konversiLink = document.getElementById('konversi-link');

    // Variabel untuk menghitung klik reset
    let resetClickCount = 0;
    let resetTimer;

    // Variabel untuk menyimpan arah konversi
    let isCelciusToFahrenheit = true;

    // Fungsi untuk mengubah teks link konversi dan placeholder
    function updateKonversiLink() {
        if (isCelciusToFahrenheit) {
            konversiLink.textContent = 'Konversi Celcius ke Fahrenheit';
            celciusInput.placeholder = 'Masukkan suhu dalam Celsius';
            resultInput.placeholder = 'Hasil konversi ke Fahrenheit';
        } else {
            konversiLink.textContent = 'Konversi Fahrenheit ke Celcius';
            celciusInput.placeholder = 'Masukkan suhu dalam Fahrenheit';
            resultInput.placeholder = 'Hasil konversi ke Celsius';
        }
    }

    // Fungsi untuk menangani konversi
    convertButton.addEventListener('click', function() {
        if (isCelciusToFahrenheit) {
            const celcius = parseFloat(celciusInput.value);
            if (!isNaN(celcius)) {
                const fahrenheit = (celcius * 9/5) + 32;
                resultInput.value = fahrenheit.toFixed(2);
                caraKonversiInput.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
            } else {
                alert('Masukkan suhu yang valid dalam Celcius >_<');
            }
        } else {
            const fahrenheit = parseFloat(celciusInput.value);
            if (!isNaN(fahrenheit)) {
                const celcius = (fahrenheit - 32) * 5/9;
                resultInput.value = celcius.toFixed(2);
                caraKonversiInput.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
            } else {
                alert('Masukkan suhu yang valid dalam Fahrenheit >_<');
            }
        }
    });

    // Fungsi untuk mereset input dan mengembalikan ke default
    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        resultInput.value = '';
        caraKonversiInput.value = '';

        // Kembalikan arah konversi ke default (Celsius ke Fahrenheit)
        if (!isCelciusToFahrenheit) {
            isCelciusToFahrenheit = true;
            updateKonversiLink(); 
        }

        // Menghitung klik reset
        resetClickCount++;

        // Jika tombol reset ditekan 5 kali dalam 1 detik
        if (resetClickCount === 5) {
            alert('udah bang🗿');
            resetClickCount = 0; 
            clearTimeout(resetTimer); 
        }

        // Set timer untuk mereset counter setelah 1 detik
        if (resetClickCount === 1) {
            resetTimer = setTimeout(function() {
                resetClickCount = 0;
            }, 1000); //
        }
    });

    // Fungsi untuk membalik arah konversi
    reverseButton.addEventListener('click', function() {
        isCelciusToFahrenheit = !isCelciusToFahrenheit; 
        updateKonversiLink(); 

        // Swap nilai input dan hasil
        const temp = celciusInput.value;
        celciusInput.value = resultInput.value;
        resultInput.value = temp;

        // Perbarui cara konversi
        if (isCelciusToFahrenheit) {
            const celcius = parseFloat(celciusInput.value);
            if (!isNaN(celcius)) {
                const fahrenheit = (celcius * 9/5) + 32;
                caraKonversiInput.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
            }
        } else {
            const fahrenheit = parseFloat(celciusInput.value);
            if (!isNaN(fahrenheit)) {
                const celcius = (fahrenheit - 32) * 5/9;
                caraKonversiInput.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
            }
        }
    });

    // Inisialisasi teks link konversi dan placeholder
    updateKonversiLink();
});
