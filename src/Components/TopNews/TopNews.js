import React from 'react';

const TopNews = () => {
    return (
        <div className="container ">
            <div class="col">
                <div class="card p-5 shadow p-3 mb-5 bg-body rounded">
                    <img style={{ height: '300px' }} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuGVbaDfmIS13e36C6HQx7OvsOQ2Mbh4F1aADC14h-9Hq6cmLMVxxqrZhrd5O4yZLSnI&usqp=CAU`} class="card-img-top shadow p-3 mb-5 bg-body rounded" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Top News</h5>
                        <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti fugiat voluptatibus molestias ex nostrum saepe perferendis, dolorum quaerat eveniet, officiis optio temporibus ipsa? Aspernatur nostrum cum sint! Magni deserunt iusto inventore libero assumenda voluptate, officia dicta ab! Unde quia nihil, dolorem veritatis id dicta, adipisci cum deleniti nam laborum alias.</p></div>
                </div>
            </div>
        </div>
    );
};

export default TopNews;