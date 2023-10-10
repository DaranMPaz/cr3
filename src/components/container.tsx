export function GridContainer({children, gap, cols}:{
  children: React.ReactNode,
  gap?: boolean
  cols: string
}) {

  const hasGap = "gap-12"

  return(
    <div className={`grid ${cols} ${gap && hasGap}`}>    
      {children}    
    </div>
  )
}

export function FlexContainer({children, gap}:{
  children: React.ReactNode,
  gap?: boolean
}) {

  const hasGap = "gap-12"

  return(
    <div className={`flex items-start ${gap && hasGap}`}>    
      {children}    
    </div>
  )
}

export function FlexYContainer({children, gap}:{
  children: React.ReactNode,
  gap?: boolean
}) {

  const hasGap = "gap-12"

  return(
    <div className={`flex flex-col ${gap && hasGap} w-full `}>    
      {children}    
    </div>
  )
}

export function FlexSpacedContainer({children}:{
  children: React.ReactNode,
}) {

  return(
    <div className={`flex items-start justify-between`}>    
      {children}    
    </div>
  )
}