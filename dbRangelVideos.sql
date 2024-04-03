
create database dbRangelVideos;
use dbRangelVideos;

create table video(
id int primary key auto_increment not null,
nome_video varchar(100),
desc_video varchar(300),
img_url varchar(120),
video_url varchar(120)
);
