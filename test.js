function isEven(number) {
	return number % 2;    ;
}

function isEvenCorrect(number){
	return number % 2 === 0;
}

QUnit.test('isEven()', function(assert) {
	assert.ok(isEven(0), 'Ноль - четное число');
	assert.ok(isEven(2), 'Два - тоже');
	assert.ok(isEven(-4), 'И отрицательное четыре - тоже четное число');
	assert.ok(!isEven(1), 'Один - нечетное число');
	assert.ok(!isEven(-7), 'Как и отрицательное семь - нечетное число');
});


QUnit.test('isEvenCorrect()', function(assert) {
	assert.ok(isEvenCorrect(0), 'Ноль - четное число');
	assert.ok(isEvenCorrect(2), 'Два - тоже');
	assert.ok(isEvenCorrect(-4), 'И отрицательное четыре - тоже четное число');
	assert.ok(!isEvenCorrect(1), 'Один - нечетное число');
	assert.ok(!isEvenCorrect(-7), 'Как и отрицательное семь - нечетное число');
});