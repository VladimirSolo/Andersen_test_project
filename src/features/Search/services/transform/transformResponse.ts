interface History {
  name: string,
  id: string
}

export const transformHistory = (data: History[]) => {
  let history: History[] = [];
  if (data) {
    history = Object.entries(data).map((item) => ({
      id: item[0],
      name: item[1].name,
    }));
  }
  return history;
};
