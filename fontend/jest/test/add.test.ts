import { add, fetchInfo, fibonacci, forEach } from '../src/01-add';

jest.mock('fetchInfo');

function asyncCallback(cb?: (str: string) => void) {
  return new Promise<string>((resolv, reject) => {
    setTimeout(() => {
      cb && cb('this is response data');
      resolv('this is promise data');
    }, 100);
  });
}

test('add 1 + 2 should equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('fibonacci 10 should equal 55', () => {
  // 全等比较使用 toBe
  expect(fibonacci(10)).toBe(55);
  // 对象值比较使用 toEqual
  expect({ name: 'saga', age: 22 }).toEqual({ name: 'saga', age: 22 });
  // 否定
  expect(1 > 0).not.toBe(false);
});

// 异步函数测试;
test('asynchronous function should run correctly', done => {
  +asyncCallback(data => {
    try {
      expect(data).toMatch(/[\w\s]*/);
      done();
    } catch (error) {
      done('some thing error with callback');
    }
  });
});

// 异步函转同步   使用promise 不能省略 return
test('asychronous function should return promise', () => {
  return asyncCallback().then(data => {
    expect(data).not.toBeUndefined;
    expect(data).not.toBeNull;
    expect(data).not.toBeFalsy;
  });
});

// 使用 async  await
// test('async and await to test asynchonous function', async () => {
//   const data = await asyncCallback();
//   expect(data).toMatch(/[\w\s]*/);
// });

/**
 * * mock 函数测试
 *  每一个 jest.fn 创建的mock函数都包含一个.mock属性包含函数如何被调用、调用时的返回值的信息
 */
test('mock function test', () => {
  const mockCallback = jest.fn(x => x);
  forEach([1, 2, 3, 4], mockCallback);

  expect(mockCallback.length).toBe(1);
  expect(mockCallback.mock.calls.length).toBe(4);
  expect(mockCallback.mock.results[0].value).toBe(1);
});

// mock 模块
// test('mock module test', () => {
//   const resp = {
//     code: 200,
//     message: 'ok',
//     data: {
//       name: 'saga',
//       age: 23,
//     },
//   };

//   fetchInfo.mockResolvex;
// });
