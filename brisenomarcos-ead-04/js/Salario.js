class Salario {


	constructor(pSalarioBruto) {
		if(!typeof arg === 'number')
			throw new Error("O salario deve ser um Numero");
		if(pSalarioBruto < 0)
			throw new Error("O salario deve maior ou igual a zero");

		this._salarioBruto = pSalarioBruto;



		
		var procentagem = 0;
		if (this._salarioBruto >= 1639.73 && this._salarioBruto <= 2822.90){
			procentagem = 9;
		}
		else if (this._salarioBruto <= 1693.82){
			procentagem = 8;
		}else{
			procentagem = 11;
		}

		var descontoINSS = (this._salarioBruto * procentagem)/100;

		if(descontoINSS > 621.04){
			descontoINSS = 621.04;
		}else{
			descontoINSS = (this._salarioBruto * procentagem)/100;
		}


		this._descontoINSS = Number(descontoINSS.toFixed(2));
		
		


		var salarioBase = this._salarioBruto - this._descontoINSS;
		var proc = 0;
		var ded = 0;

		if (salarioBase > 4664.68) {
			proc = 27.5;
			ded = 869.36;
		}else
		if (salarioBase >= 3751.06) {
			proc = 22.5;
			ded = 636.13;
		} else
		if (salarioBase >= 2826.66) {
			proc = 15;
			ded = 354.80;
		} else
		if (salarioBase >= 1903.99) {
			proc = 7.5;
			ded = 142.80;
		}
		let Calculo = (((salarioBase*proc)/100) - ded);
		
		this._descontoIRPF = Number(Calculo.toFixed(2));
		this._totalDescontos = Number((this._descontoINSS + this._descontoIRPF).toFixed(2));
		this._salarioLiquido = Number((this._salarioBruto - (this._descontoINSS + this._descontoIRPF)).toFixed(2));


		Object.freeze(this);
	}

	get salarioBruto() {
		return this._salarioBruto;
	}

	get descontoINSS() {
		return this._descontoINSS;
	}

	get descontoIRPF() {
		return this._descontoIRPF;
	}

	get totalDescontos() {
		return this._totalDescontos;
	}

	get salarioLiquido() {
		return this._salarioLiquido;
	}
}
