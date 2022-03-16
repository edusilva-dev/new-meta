import Ports from 'enums/ports'

const getPort = () => {
  const WINDOW_SIZE = window.innerWidth

  if (WINDOW_SIZE < 768) return Ports.SMALL_SIZE
  if (WINDOW_SIZE < 1010) return Ports.MEDIUM_SIZE

  return Ports.HIGH_SIZE
}

export default getPort
