import { useState, useEffect } from 'react'

export default function useList() {
  const [companyCount, setCompanyCount] = useState()
  const [shopCount, setShopCount] = useState()
  const [courseCount, setCourseCount] = useState()


  //搜索
  const handleSearch = () => {
    setCompanyCount(10)
    setShopCount(102)
    setCourseCount(806)
  }

  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  }, [])
  return {
    companyCount,
    shopCount,
    courseCount
  }
}
