import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage } from "../index.js";

export function renderPostsPageComponent({ appEl }) {
  // @TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);

  /**
   * @TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const appHtml = posts
    .map((posts) => {
      return `
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">
                  <li class="post">
                    <div class="post-header" data-user-id="642d00329b190443860c2f31">
                        <img src="${posts.imageUrl}" class="post-header__user-image">
                    </div>
                    <div class="post-image-container">
                      <img class="post-image" src="${posts.imageUrl}">
                    </div>
                    <div class="post-likes">
                      <button data-post-id="642d00579b190443860c2f32" class="like-button">
                        <img src="./assets/images/like-active.svg">
                      </button>
                      <p class="post-likes-text">
                        Нравится: <strong>${posts.likes.lensgth}</strong>
                      </p>
                    </div>
                    <p class="post-text">
                      <span class="user-name">${posts.user.name}</span>
                    ${posts.description}
                    </p>
                    <p class="post-date">
                    ${posts.createdAt}
                    </p>
                  </li>
                </ul>
              </div>`;
    })
    .join("");
  const randerPage = `
    <div class ='page-container'>
    <div class="header-container"></div>
    <ul class="posts">${appHtml}</ul>
    </div>
    `;

  appEl.innerHTML = randerPage;

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
