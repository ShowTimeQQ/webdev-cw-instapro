export function renderUserPageComponent({ appEl }) {
  // @TODO: реализовать рендер постов из api
  console.log("список постов Юзера:", post);

  /**
   * @TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const appHtml = post
    .map((post) => {
      return `
                    <li class="post">
                      <div class="post-header" data-user-id="${post.user.id}">
                          <img src="${post.user.imageUrl}" class="post-header__user-image">
                          <p class="post-header__user-name">${post.user.name}</p>
                      </div>
                      <div class="post-image-container">
                        <img class="post-image" src="${post.imageUrl}">
                      </div>
                      <div class="post-image-container">
                        <img class="post-image" scr="${post.imageUrl}">
                        </div>
                        <div class="post-likes">
                       <button data-post-id="${post.id}" class="like-button">
                          <img scr="./assets/images/like-active.svg">
                      </button>
                      <p class="post-likes-text">
                      Нравится: <strong>${post.likes.length}</strong>
                        <span class="user-name">${post.user.name}</span>
                      ${post.description}
                      </p>
                      <p class="post-date">
                      ${post.createdAt}
                      </p>
                    </li>
                  </ul>
                </div>`;
    })
    .join("");
  const userProfilPhoto = userPosts[0].user.imageUrl;
  const userProfilName = userPosts[0].user.name;

  const userProfil = `
  <img class = "user-photo" scr="${userProfilPhoto}" alt="">
  <p class="user-name-individual">${userProfilName}</p>
  `;

  const page = `
      <div class ='page-container'>
      <div class="header-container"></div>
      <div class="user-profile">${userProfil}</div>
      <ul class="posts">${appHtml}</ul>
      </div>
      `;

  appEl.innerHTML = page;

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  for (let userEl of document.querySelectorAll(".post-header")) {
    userEl.addEventListener("click", () => {
      goToPage(USER_POSTS_PAGE, {
        userId: userEl.dataset.userId,
      });
    });
  }
}
export const updateappHtml = (appHtml) => {
  appHtml = newappHtml;
};
