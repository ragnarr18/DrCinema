
export function compareDateStrings(d1, d2) {
  // strings are of the format xx:yy
  // where xx stands for hours and yy for minutes.
  // returns
  //  > TRUE  if d1 is greater than d2
  //  > TRUE  if the dates are the same
  //      - You can't purchase tickets to a show that has already started.
  //  > FALSE if d2 is greater than d1

  let h1 = d1.substr(0, d1.indexOf(':'));
  let h2 = d2.substr(0, d2.indexOf(':'));
  let m1 = d1.substr(d1.indexOf(':') + 1, d1.length);
  let m2 = d2.substr(d2.indexOf(':') + 1, d2.length);

  h1 = parseInt(h1);
  h2 = parseInt(h2);
  m1 = parseInt(m1);
  m2 = parseInt(m2);

  if (h1 > h2) {
    return true;
  }
  if (h1 < h2) {
    return false;
  }
  if (h1 == h2) {
    if (m1 > m2) {
      return true;
    }
    if (m1 < m2) {
      return false;
    }
    if (m1 == m2) {
      return true;
    }
  }
}
