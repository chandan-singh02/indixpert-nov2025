class VLC:
    def play(self):
        print("playing media")
    
    def stop(self):
        print("Stopping media")

class AudioPlayer(VLC):
    def play(self):
        print("Playing audio player file")

class VideoPlayer(VLC):
    def play(self):
        print("playing video file,loading subtitles")

class StreamingPlayer(VLC):
    def play(self):
        print("connecting internet")


VideoPlayer().play()
