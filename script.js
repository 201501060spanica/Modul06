	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('WINNER!!');
			console.log('');
		}
		else
		{
			console.log('LOST!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Apakah anda tahu tentang JavaScript ?',
	['Tahu', 'Tidak'],
	'0'); 
	var q2 = new Question('Dokumen Apa yang dapat dikolaborasikan dengan JavaScript ?',
	['CSS', 'PHP', 'HTML', 'JS'],
	'1');
	var q3 = new Question('Siapa yang menciptakan JavaScript ?',
	['Brendan Eich', 'Berners-Lee', 'Hakon Wiuw lie'],
	'0');
	var q4 = new Question('Apa yang dimaksud dengan let pada JavaScript ?',
	['variabel tak dapat diubah', 'variabel dapat diubah','variabel level blok','variabel level kolom'],
	'2');
	var q5 = new Question('Apa yang dimaksud dengan var pada JavaScript ?',
	['variabel', 'variabel level fungsi', 'variabel berfungsi'],
	'1');
    var q6 = new Question('HTML merupakan singkatan dari ?',
	['High Text Multi Language', 'Hyper Text Markup Language','Hyper Text Multi Languange','High Text Markup Language'],
	'1');
    var q7 = new Question('Apa bahasa fungsional JavaScript ?',
	['first class', 'second class', 'first class function'],
	'2');
    var q8 = new Question('Kapan Javascript rilis?',
	['2018', '2015', '2013' , '2010'],
	'3');
    var q9 = new Question('Siapa Nama Dosen yang mengajar JavaScript di Stikom ?',
	['Dhani', 'Safar', 'Adi', 'Oskar'],
	'3');
    var q10 = new Question('Apa yang dimaksud dengan .js ?',
	['JavaSip', 'JavaScript'],
	'1');
    
    var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Please Answer the question !');

			if (answer == 'exit')
			{
				console.log('');
				console.log('---LOGOUT FOR THIS GAME---');
				console.log('');
				console.log('JUMLAH PERTANYAAN = ' + Jumlah_Pertanyaan);
				console.log('JUMLAH JAWABAN LOST = ' + Salah_Jawab);
				console.log('SCORE = ' + Skor_Akhir);
				break Berhenti;
			}
			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}