import test from 'tape';
import fullSelect from './../';

var select;
var cstSelect;

test('With the public property set the value', assert => {
  document.body.innerHTML = '';

  select = document.createElement('select');
  select.innerHTML = `
    <option value="fruit">mango</option>
    <option value="flower">rose</option>
    <option value="fruit">pineapple</option>
    <option value="flower">lotus</option>
    <option value="flower">lily</option>
  `;
  document.body.appendChild(select);

  cstSelect = fullSelect('select');
  cstSelect[0].value = 'flower';

  const actual = select.value;
  const expected = 'flower';

  assert.deepEqual(actual, expected,
    'should return flower');
  assert.end();
});

test('... and use public property to get the value', assert => {
  const actual = cstSelect[0].value;
  const expected = 'flower';

  assert.deepEqual(actual, expected,
    'should return flower');
  assert.end();
});

test('... and the correct custom option is selected', assert => {
  const actual = select.options[1].fullSelectCstOption.classList.contains('is-selected');
  const expected = true;

  assert.deepEqual(actual, expected,
    'should return true');
  assert.end();
});

test('... and only one option is selected ', assert => {
  const actual = document.querySelectorAll('.is-selected').length;
  const expected = 1;

  assert.deepEqual(actual, expected,
    'should return 1');
  assert.end();
});

test('With the public property set an unexisting value', assert => {
  cstSelect[0].value = 'random';

  const actual = select.value;
  const expected = 'fruit';

  assert.deepEqual(actual, expected,
    'should return fruit');
  assert.end();
});
