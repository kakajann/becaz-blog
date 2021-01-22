import axios, { Method } from 'axios'

interface P {
  path: string
  method?: Method
}

const Request = ({ path, method }: P) => {
  const data = axios({
    url: `/api/${path}`,
    method,
  })

  return data
}

Request.defaultProps = {
  method: 'GET',
}

export default Request
