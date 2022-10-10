const Delete = async (URLDELETE, companyId) => {
  return await fetch(`${URLDELETE}${companyId}`, {
    method: "DELETE",
    
  });
  
};
export default Delete;
