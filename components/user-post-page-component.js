import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { goToPage } from "../index.js";

export function renderUserPageComponent({ appEl }) {
  // @TODO: реализовать рендер постов из api
  //   console.log("Пост конкретного юзера", userPosts);

  /**
   * @TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const appHtml = userPosts
    .map((post) => {
      return `
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">
                  <li class="post">
                    <div class="post-header" data-user-id=${post.user.id}>
                        <img src="${post.imageUrl}" class="post-header__user-image">
                    </div>
                    <div class="post-image-container">
                      <img class="post-image" src="${post.imageUrl}">
                    </div>
                    <div class="post-likes">
                      <button data-post-id="642d00579b190443860c2f32" class="like-button">
                        <img src="./assets/images/like-active.svg">
                      </button>
                      <p class="post-likes-text">
                        Нравится: <strong>${post.likes.length}</strong>
                      </p>
                    </div>
                    <p class="post-text">
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

  const pageConteiner = `
    <div class ='page-container'>
    <div class="header-container"></div>
    <div class="user-profile">${userProfil}</div>
    <ul class="posts">${appHtml}</ul>
    </div>
    `;

  appEl.innerHTML = pageConteiner;

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
