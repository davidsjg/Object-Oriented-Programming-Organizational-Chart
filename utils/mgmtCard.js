function mgmtMarkdown(data) {
  return `
  <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;" >
  <div class="card-body">
    <h5 class="card-title">Joey</h5>
    <!-- <svg class="bi eyeglasses" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg> -->
    <i class="fas fa-bars"></i>
    <h5 class="card-text role" >Engineer</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: </li>
    <li class="list-group-item">Email: </li>
    <li class="list-group-item">Office Number: </li>
  </ul>
</div>
`;
}

module.exports = mgmtMarkdown;