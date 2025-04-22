import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { posts } from '../model/posts';
import Header from '../page/home/Header';
import MarkdownRenderer from '../component/MarkdownRenderer';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    if (selectedPost) {
      axios.get(selectedPost.source_url)
        .then(response => setMarkdownContent(response.data))
        .catch(error => console.error('Error fetching markdown:', error));
    }
  }, [selectedPost]);

  return (
    <div className="min-h-screen w-full flex flex-col max-w-screen-2xl lg:px-8 md:px-8 sm:px-0 relative">
      <Header className="w-full "/>
      <div className="flex flex-1">
        {/* Posts List - 20% width */}
        <div className="w-1/5 overflow-y-auto p-4 border-r border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.title}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedPost?.title === post.title
                    ? 'bg-blue-600'
                    : 'hover:bg-gray-800'
                }`}
                onClick={() => setSelectedPost(post)}
              >
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-400">{post.date}</p>
                <p className="text-sm mt-2">{post.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Post Content - 80% width */}
        <div className="w-4/5 overflow-y-auto">
          {selectedPost ? (
            <MarkdownRenderer content={markdownContent} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-gray-400">Select a post to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog; 