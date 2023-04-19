export const useScrollLeft = () => {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth
  const sectionRoot = document.querySelector('.App')

  sectionRoot.scrollLeft += windowWidth
}
