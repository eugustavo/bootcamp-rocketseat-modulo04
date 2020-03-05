import React, { Component } from 'react';

import Post from '../Post';

import './styles.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Kennedy Santos",
          avatar: "https://avatars3.githubusercontent.com/u/25750884?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, incluse 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando videos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: "Carlos Levir",
          avatar: "https://avatars1.githubusercontent.com/u/40604081?s=400&v=4"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo? Comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Luke",
              avatar: "https://avatars0.githubusercontent.com/u/14251143?s=460&v=4"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: "João Pedro",
              avatar: "https://avatars0.githubusercontent.com/u/26466516?s=460&v=4"
            },
            content: "Que maaaaaaaaassa! Estou pensando em me inscrever na próxima turma para ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },
        ],
      },
    ]
  }
  render(){
    return(
      <ul>
        {this.state.posts.map(post => 
          <Post key={post.id} post={post} />
        )}
      </ul>
    )
  }
}

export default PostList;
