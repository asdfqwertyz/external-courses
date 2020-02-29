function isPrime(num)
{
	if (num >1000 || num<0)
	{
		return "Данные неверны"
	}
	if (num === 1)
	{
		return `Число ${num} - составное число`
	}
	if (num === 2)
	{
		return `Число ${num} - простое число`
	}
	if (num === 0)
	{
		return "Число ни простое ни составное"
	}
	
	for (let i = 2; i<num;i++)
	{
		if (num % i === 0)
		{
			return `Число ${num} - составное число`
		}
	}
	return `Число ${num} - простое число`
}
module.exports = isPrime