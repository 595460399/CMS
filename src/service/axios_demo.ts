import axios from 'axios'

// axios.get('http://www.baidu.com').then((res) => console.log(res))
// axios.request({
//   method: 'get',
//   url: 'http://123.207.32.32:8000/home/multidata'
// })

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
axios
  .get('https://httpbin.org/get', {
    params: {
      name: 'ssyy',
      age: '14'
    }
  })
  .then((res) => console.log(res.data))

axios
  .post('https://httpbin.org/post', {
    data: {
      name: 'stym',
      age: 14
    }
  })
  .then((res) => console.log(res.data))
