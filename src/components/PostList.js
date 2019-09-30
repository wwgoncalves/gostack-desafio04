import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://a.wattpad.com/useravatar/Suicidalpony1234.256.647833.jpg",
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://pbs.twimg.com/profile_images/680651472292442112/4i30mPAs_400x400.jpg",
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real.)",
          },
        ],
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar:
            "https://pbs.twimg.com/profile_images/3119236633/a82ce7005344418ed99de1e14a683a3e.jpeg",
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar:
                "https://i2.wp.com/tellmemore.media/wp-content/uploads/2018/09/gwyneth-paltrow-gaat-weekend-trouwen.jpg",
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!",
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://cdn130.picsart.com/304906277246201.png",
            },
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!",
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
